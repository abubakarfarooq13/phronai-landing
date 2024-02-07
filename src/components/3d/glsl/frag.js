// export const fragmentShader = /* glsl */ `
//   uniform vec3 diffuse;
//   uniform float opacity;

//   #include <common>
//   #include <color_pars_fragment>
//   #include <map_particle_pars_fragment>
//   #include <alphatest_pars_fragment>
//   #include <alphahash_pars_fragment>
//   #include <fog_pars_fragment>
//   #include <logdepthbuf_pars_fragment>
//   #include <clipping_planes_pars_fragment>

//   void main() {

//     vec4 diffuseColor = vec4( diffuse, opacity );
//     #include <clipping_planes_fragment>

//     vec3 outgoingLight = vec3( 0.0 );

//     #include <logdepthbuf_fragment>
//     #include <map_particle_fragment>
//     #include <color_fragment>
//     #include <alphatest_fragment>
//     #include <alphahash_fragment>

//     outgoingLight = diffuseColor.rgb;

//     #include <opaque_fragment>
//     #include <tonemapping_fragment>
//     #include <colorspace_fragment>
//     #include <fog_fragment>
//     #include <premultiplied_alpha_fragment>
//   }
// `;

export const fragmentShader = /* glsl */ `
  uniform sampler2D uTexture;
  varying vec2 vTexCoords;
  uniform float uNbLines;
  uniform float uNbColumns;
  uniform vec3 color;

  varying float uOpacity;

  varying float vOpacity;

  float circle(vec2 uv, float border) {
    float radius = 0.5;
    float dist = radius - distance(uv, vec2(0.5));
    return smoothstep(0.0, border, dist);
  }

  void main() {

    vec2 uv = gl_PointCoord;

    uv.y *= -1.0;

    uv /= vec2(uNbColumns, uNbLines);

    float texOffsetU = vTexCoords.x / uNbLines;

    // same for y
    float texOffsetV = vTexCoords.y / uNbColumns;

    uv += vec2(texOffsetU, texOffsetV);

    // finally we add 0.5 to center the value
    // uv += vec2(0.5);

    vec4 texture = texture2D(uTexture, uv);

    gl_FragColor = texture;

    // gl_FragColor = vec4(texture.rgb, texture.a * vOpacity);

    gl_FragColor.a *= circle(gl_PointCoord, .2);
  }
`;
