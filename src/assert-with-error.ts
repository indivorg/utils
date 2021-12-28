export function assertWithError(
  condition: unknown,
  error: unknown,
): asserts condition {
  if (!condition) {
    throw error;
  }
}