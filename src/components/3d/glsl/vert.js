export const vertexShader = /* glsl */ `
  uniform float uPointSize;
  uniform float uProgress;
  uniform float uFrequency;
  uniform float uTime;
  uniform vec3 uMousePos;

  attribute float uOpacity;

  varying vec2 vTexCoords;

  attribute vec3 initPosition;

  const float amplitude = 1.0;

  void main() {
    #include <begin_vertex>

    // appear effect
    transformed = initPosition + ((position - initPosition) * uProgress);

    // wave effect
    // transformed.z += sin(transformed.x * uFrequency + uTime) * amplitude;
    // transformed.z += sin(transformed.y * uFrequency + uTime) * amplitude;

    // float distanceToMouse = pow(1. - clamp(length(uMousePos.xy - transformed.xy) -.03, -4., 1.), 2.5);

    // transformed.x -= distanceToMouse * 0.5 * rndz * cos(angle);
    // transformed.y -= distanceToMouse * 0.5 * rndz * sin(angle);

    // vec3 seg = position - uMousePos;
    // vec3 dir = normalize(seg);
    // float dist = length(seg);

    // if (dist < 2.) {
    //   float force = clamp(1. / (dist * dist), 0., 1.);
    //   transformed += dir * force;
    // }

    gl_PointSize = uPointSize;

    vTexCoords = position.xy;
    // vOpacity = uOpacity;

    #include <project_vertex>
  }
`;

// export const vertexShader = /* glsl */ `
//   uniform float uPointSize;
//   uniform float uProgress;
//   uniform float uFrequency;
//   uniform float uTime;
//   uniform vec3 uMousePos;

//   attribute float uOpacity;

//   varying vec2 vTexCoords;

//   attribute vec3 initPosition;

//   const float amplitude = 1.0;

//   void main() {
//     #include <begin_vertex>

//     vTexCoords = position.xy;

//     // appear effect
//     // transformed = initPosition + ((position - initPosition) * uProgress);

//     vec3 seg = position - uMousePos;
//     vec3 dir = normalize(seg);
//     float dist = length(seg);

//     if (dist < 30.){
//       float force = clamp(1. / (dist * dist), 0., 1.);
//       transformed += dir * force * 1.1;
//     }

//     vec4 modelPosition = modelMatrix * vec4(transformed, 1.);
//     vec4 viewPosition = viewMatrix * modelPosition;
//     vec4 projectionPosition = projectionMatrix * viewPosition;

//     gl_Position = projectionPosition;
//     gl_PointSize = uPointSize;
//   }
// `;

// uniform vec3 uMouse;
// uniform float uSize;
// uniform float uPixelRatio;
// uniform float uTime;

// attribute float aScale;
// attribute float pindex;
// attribute float angle;

//     void main()
//     {
//         /**
//          * Position
//          */
//          //local
//         float rndz = (random(pindex) + snoise(vec2(pindex * 0.1, uTime * 0.1)));

//         vec3 particlePosition = (modelMatrix * vec4(position, 1.0)).xyz;

//         float distanceToMouse = pow(1. - clamp(length(uMouse.xy - particlePosition.xy) -.03, -4., 1.), 2.5);

//         particlePosition.x -= distanceToMouse * 0.5 * rndz * cos(angle);
//         particlePosition.y -= distanceToMouse * 0.5 * rndz * sin(angle);

//         //camera

//         vec4 viewPosition = viewMatrix * vec4(particlePosition, 1.);

//         gl_Position = projectionMatrix * viewPosition;

//         //size
//         gl_PointSize = uSize * aScale * uPixelRatio;}
