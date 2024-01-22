export const vertexShader = /* glsl */ `
  uniform float uPointSize;
  uniform float uProgress;
  uniform float uFrequency;
  uniform float uTime;

  varying vec2 vTexCoords;

  attribute vec3 initPosition;

  const float amplitude = 1.0;

  void main() {
    #include <begin_vertex>

    // appear effect
    transformed = initPosition + ((position - initPosition) * uProgress);
    
    // wave effect
    transformed.z += sin(transformed.x * uFrequency + uTime) * amplitude;
    transformed.z += sin(transformed.y * uFrequency + uTime) * amplitude;
   
    #include <project_vertex>

    gl_PointSize = uPointSize;

    vTexCoords = position.xy;
  }
`;
