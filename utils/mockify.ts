export const mockify = (obj: any): any => {
  if (obj === null || obj === undefined) {
    return obj;
  }

  if (typeof obj == 'string') {
    return '/string'
  }

  if (Array.isArray(obj)) {
    return [];
    // return obj.map(mockify)
  }

  if (typeof obj == 'object') {
    return Object.entries(obj)
      .reduce((acc: any, [key, value]) => {
        acc[key] = mockify(value)
        return acc;

      }, {})
  }

  return obj;
}
