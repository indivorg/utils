export interface ParsedResource {
  type: string;
  id: string;
}
/**
 *
 * @param name e.g. user:42ff33d0-sara-0242ac130002
 */
export function parseResourceName(name: string): ParsedResource {
  const [type, id] = name.split(':');
  if (!type || !id) {
    throw new Error('Could not parse resource name');
  }
  return { type, id };
}
