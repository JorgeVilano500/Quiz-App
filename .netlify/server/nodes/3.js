

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CwJtTeiV.js","_app/immutable/chunks/scheduler.B0z7vNaY.js","_app/immutable/chunks/index.CG6jpaJ_.js"];
export const stylesheets = [];
export const fonts = [];
