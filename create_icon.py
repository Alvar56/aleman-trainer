from PIL import Image, ImageDraw

# Icono de la app: la bandera alemana y la austriaca, separadas por una raya.
#
# LA RAYA VA DE BORDE ARRIBA A BORDE ABAJO, casi vertical y algo inclinada.
# No es un capricho: las dos banderas tienen las franjas HORIZONTALES, asi que
# cualquier corte en diagonal de esquina a esquina deja a una de ellas sin una
# franja entera. Con la diagonal "/" desaparecia el dorado aleman; al darle la
# vuelta a "\" desaparecia el negro. Una raya que cruza de arriba abajo deja a
# cada bandera con sus tres franjas, que es lo que las hace reconocibles.
SIZE = 256
RADIO = 48

# Donde corta la raya, en pixeles desde la izquierda. Inclinada hacia la
# derecha segun baja: asi Alemania se ensancha por abajo y el dorado, que es
# la franja que menos se veia, gana sitio.
#
# Los dos valores son simetricos respecto al centro (128), asi que la raya
# cruza justo por el medio del icono y cada bandera se queda con la mitad.
CORTE_ARRIBA = 96
CORTE_ABAJO = 160

# Grosor de la raya separadora. El SVG tiene que llevar el equivalente:
# su viewBox es de 32, asi que stroke-width = GROSOR / 8.
GROSOR = 8

NEGRO = (17, 17, 17, 255)
ROJO_DE = (221, 0, 0, 255)
DORADO = (255, 206, 0, 255)
ROJO_AT = (239, 51, 64, 255)
BLANCO = (255, 255, 255, 255)
BORDE = (15, 23, 41, 255)

# Se dibuja al cuadruple y se reduce al final: la raya y la esquina redondeada
# salen suavizadas en vez de con los dientes de sierra de pintar pixel a pixel.
ESCALA = 4
lado = SIZE * ESCALA
xa, xb = CORTE_ARRIBA * ESCALA, CORTE_ABAJO * ESCALA

img = Image.new("RGBA", (lado, lado), (0, 0, 0, 0))

for y in range(lado):
    # Franja horizontal en la que cae esta fila (tercios).
    if y < lado / 3:
        de, at = NEGRO, ROJO_AT
    elif y < 2 * lado / 3:
        de, at = ROJO_DE, BLANCO
    else:
        de, at = DORADO, ROJO_AT
    corte = xa + (xb - xa) * y / lado
    for x in range(lado):
        img.putpixel((x, y), de if x < corte else at)

# La raya que separa las dos banderas.
ImageDraw.Draw(img).line([(xa, 0), (xb, lado)], fill=BORDE, width=GROSOR * ESCALA)

# Esquinas redondeadas.
mascara = Image.new("L", (lado, lado), 0)
ImageDraw.Draw(mascara).rounded_rectangle((0, 0, lado - 1, lado - 1), radius=RADIO * ESCALA, fill=255)
img.putalpha(mascara)

img = img.resize((SIZE, SIZE), Image.LANCZOS)

# Varios tamaños dentro del .ico: Windows coge el que necesita para el
# escritorio (32-48 px) en vez de reducir el de 256 el solo.
img.save("public/icon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)])
print("Icono creado en public/icon.ico")
