import { parseResourceName } from '../src/parse-resource-name';
describe('parse-resource-name.ts', () => {
  it.each([
    {
      resourceName: 'user:42ff33d0-sara-0242ac130002',
      type: 'user',
      id: '42ff33d0-sara-0242ac130002',
    },
  ])('should parse', (d) => {
    const { type, id } = parseResourceName(d.resourceName);

    expect(type).toBe(d.type);
    expect(id).toBe(d.id);
  });

  it('should fail if resource name is invalid', () => {
    const fail = () => parseResourceName('this-is-invalid');
    expect(fail).toThrow();
  })
});
