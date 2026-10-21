export function requireElementById<T extends HTMLElement = HTMLElement>(
  id: string,
  type: new () => T = HTMLElement as new () => T,
): T {
  const element = document.getElementById(id);
  if (!element) throw new Error(`Could not find element with id ${id}`);
  if (!(element instanceof type)) {
    throw new Error(`Element #${id} is not a ${type.name}`);
  }
  return element;
}

export function requireQuery<T extends HTMLElement = HTMLElement>(
  selector: string,
  root: ParentNode = document,
): T {
  const element = root.querySelector<T>(selector);
  if (!element) {
    throw new Error(`Could not find element matching ${selector}`);
  }
  return element;
}

export function queryAll<T extends HTMLElement = HTMLElement>(
  selector: string,
  root: ParentNode = document,
): T[] {
  return Array.from(root.querySelectorAll<T>(selector));
}