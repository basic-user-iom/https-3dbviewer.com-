/**
 * Orb interior — Godot port (flow + swirl + vignette) + heartbeat pulse.
 * Uses iResolution.xy, iTime; WebGL2 + WebGL1 fallback.
 */

// --- WebGL2 (ES 300) ---
export const orbInteriorVertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`

export const orbInteriorFragment = `#version 300 es
precision highp float;

uniform float iTime;
uniform vec3  iResolution;

out vec4 fragColor;

// Lub-dub rhythm: quick double beat, then pause (~72 BPM).
float heartbeatPulse(float t) {
  float period = 0.9;
  float p = mod(t, period) / period;
  float lub = exp(-80.0 * p * p);
  float dub = exp(-60.0 * (p - 0.13) * (p - 0.13));
  return 1.0 + 0.1 * lub + 0.15 * dub;
}

void main() {
  vec2 resolution = iResolution.xy;
  float time = iTime;

  float brightness = 9.044;
  float min_limit = -0.5;
  float contrast_scale = 360.0;
  float vignette_power = 2.0;
  float vignette_scale = 0.763;
  float num_loops = 14.0;
  float flow_rotation_angle = 150.0;
  float flow_velocity = 0.033;
  float flow_intensity_scale = 40.0;
  float diagonal_brightness = 1.0;
  float uv_rotation_angle = 267.0;
  float swirl_rotation_angle = 80.0;
  float stabilization_value = 0.061;

  vec2 u = 0.2 * (2.0 * gl_FragCoord.xy - resolution) / resolution.y;

  float rotation_rad = radians(uv_rotation_angle);
  mat2 rotation_matrix = mat2(cos(rotation_rad), sin(rotation_rad), -sin(rotation_rad), cos(rotation_rad));
  u = rotation_matrix * u;

  vec4 z = vec4(1.0, 2.0, 3.0, 0.0);
  vec4 o = z;

  float t = time;
  float a = 0.5;

  vec2 flow_direction = vec2(cos(radians(flow_rotation_angle)), sin(radians(flow_rotation_angle)));
  float swirl_rad = radians(swirl_rotation_angle);
  vec4 light_direction_params = vec4(0.0, 11.0 * cos(swirl_rad), 33.0 * sin(swirl_rad), 0.0);

  for (float i = 0.0; i < num_loops; i += 1.0) {
    vec4 m_vec = cos(i + 0.02 * t - light_direction_params);
    mat2 m = mat2(m_vec.xy, m_vec.zw);

    float denominator_stabilizer = max(0.001, 0.5 - dot(u, u));
    float flow_offset = dot(flow_direction, u.yx) * flow_intensity_scale;

    vec2 u_norm = length(u.yx) > 0.001 ? normalize(u.yx) : vec2(1.0, 0.0);
    float diagonal_mask = pow(abs(dot(flow_direction, u_norm)), 4.0);
    float color_intensity_scale = mix(1.0, diagonal_brightness, diagonal_mask);

    float denom = max(stabilization_value, length((1.0 + i * dot(u, u)) * sin(1.5 * u / denominator_stabilizer - flow_offset + t * flow_velocity)));
    o += (1.0 + cos(z + t)) / denom * color_intensity_scale;

    t += 1.0;
    a += 0.03;
    u += tanh(40.0 * dot(u * m, u) * cos(1e2 * u.yx + t)) / 2e2 + 0.2 * a * u + cos(4.0 / exp(dot(o, o) / 1e2) + t) / 3e2;
  }

  o = brightness / (min(o, min_limit) + contrast_scale / o);
  float vignette_mask = 1.0 - pow(length(u) * vignette_scale, vignette_power);

  float hb = heartbeatPulse(time);
  fragColor = vec4(clamp(o.rgb * hb, 0.0, 1.0), clamp(vignette_mask, 0.0, 1.0) * 0.98);
}
`

// --- WebGL1 (ES 100) fallback ---
export const orbInteriorVertexES100 = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`

export const orbInteriorFragmentES100 = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform float iTime;
uniform vec3  iResolution;

float tanh_es(float x) {
  vec2 e = exp(vec2(x, -x));
  return (e.x - e.y) / (e.x + e.y);
}
vec2 tanh_es2(vec2 x) {
  return vec2(tanh_es(x.x), tanh_es(x.y));
}

// Lub-dub rhythm: quick double beat, then pause (~72 BPM).
float heartbeatPulse(float t) {
  float period = 0.9;
  float p = mod(t, period) / period;
  float lub = exp(-80.0 * p * p);
  float dub = exp(-60.0 * (p - 0.13) * (p - 0.13));
  return 1.0 + 0.1 * lub + 0.15 * dub;
}

void main() {
  vec2 resolution = iResolution.xy;
  float time = iTime;

  float brightness = 9.044;
  float min_limit = -0.5;
  float contrast_scale = 360.0;
  float vignette_power = 2.0;
  float vignette_scale = 0.763;
  float num_loops = 14.0;
  float flow_rotation_angle = 150.0;
  float flow_velocity = 0.033;
  float flow_intensity_scale = 40.0;
  float diagonal_brightness = 1.0;
  float uv_rotation_angle = 267.0;
  float swirl_rotation_angle = 80.0;
  float stabilization_value = 0.061;

  vec2 u = 0.2 * (2.0 * gl_FragCoord.xy - resolution) / resolution.y;

  float rotation_rad = radians(uv_rotation_angle);
  mat2 rotation_matrix = mat2(cos(rotation_rad), sin(rotation_rad), -sin(rotation_rad), cos(rotation_rad));
  u = rotation_matrix * u;

  vec4 z = vec4(1.0, 2.0, 3.0, 0.0);
  vec4 o = z;

  float t = time;
  float a = 0.5;

  vec2 flow_direction = vec2(cos(radians(flow_rotation_angle)), sin(radians(flow_rotation_angle)));
  float swirl_rad = radians(swirl_rotation_angle);
  vec4 light_direction_params = vec4(0.0, 11.0 * cos(swirl_rad), 33.0 * sin(swirl_rad), 0.0);

  for (float i = 0.0; i < num_loops; i += 1.0) {
    vec4 m_vec = cos(i + 0.02 * t - light_direction_params);
    mat2 m = mat2(m_vec.xy, m_vec.zw);

    float denominator_stabilizer = max(0.001, 0.5 - dot(u, u));
    float flow_offset = dot(flow_direction, u.yx) * flow_intensity_scale;

    vec2 u_norm = length(u.yx) > 0.001 ? normalize(u.yx) : vec2(1.0, 0.0);
    float diagonal_mask = pow(abs(dot(flow_direction, u_norm)), 4.0);
    float color_intensity_scale = mix(1.0, diagonal_brightness, diagonal_mask);

    float denom = max(stabilization_value, length((1.0 + i * dot(u, u)) * sin(1.5 * u / denominator_stabilizer - flow_offset + t * flow_velocity)));
    o += (1.0 + cos(z + t)) / denom * color_intensity_scale;

    t += 1.0;
    a += 0.03;
    vec2 tanh_arg = 40.0 * dot(u * m, u) * cos(1e2 * u.yx + t);
    u += tanh_es2(tanh_arg) / 2e2 + 0.2 * a * u + cos(4.0 / exp(dot(o, o) / 1e2) + t) / 3e2;
  }

  o = brightness / (min(o, min_limit) + contrast_scale / o);
  float vignette_mask = 1.0 - pow(length(u) * vignette_scale, vignette_power);

  float hb = heartbeatPulse(time);
  gl_FragColor = vec4(clamp(o.rgb * hb, 0.0, 1.0), clamp(vignette_mask, 0.0, 1.0) * 0.98);
}
`
