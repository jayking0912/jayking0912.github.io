"\n \n #ifdef GL_ES\n \n //precision mediump float;\n \n precision highp float;\n \n #endif\n \n uniform sampler2D uSrc;\n \n uniform vec2 uDelta;\n \n \n \n varying vec2 texCoord;\n \n varying vec2 screenCoord;\n \n \n \n void main(void) {\n \n     vec4 col = texture2D(uSrc, texCoord);\n \n     gl_FragColor = vec4(col.rgb * 2.0 - vec3(0.5), 1.0);\n \n }\n \n "