czm_material czm_getMaterial(czm_materialInput materialInput){
    czm_material material = czm_getDefaultMaterial(materialInput);
    vec2 st = materialInput.st;
    float st_map_s = fract(st.s - speed * czm_frameNumber * 0.001);
    vec4 colorImage = texture(image, vec2(st_map_s, st.t));
    vec4 fragColor;
    fragColor.rgb = color.rgb / 1.0;
    material.alpha = colorImage.a * color.a;
    material.diffuse = fragColor.rgb;
    material.emission = fragColor.rgb;
    return material;
}
