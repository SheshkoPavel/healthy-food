export const getObjWithoutCircular = (object: any) => {
  const seen: any = [];
  const links: any = [];

  const getLink = (link: any) => {
    const index: number = links.indexOf(link);
    return `*** circular link ${index} ***`;
  }

  const getCircularReplacer = () => {
    return (key: string, value: any) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.includes(value)) {
          links.push(value);
          return getLink(value);
        }
        seen.push(value);
      }
      return value;
    };
  };

  const getObjectWithoutCircularLinks = (obj: any): any => {
    if (typeof obj === 'undefined') {
      return 'undefined'
    }

    if (!obj) {
      return obj
    }


    if (Array.isArray(obj)) {
      return obj.map(getObjectWithoutCircularLinks)
    }

    if (typeof obj === 'function') {
      return 'function'
    }

    if (links.includes(obj)) {
      return getLink(obj)
    }

    if (typeof obj === 'object') {
      return Object.entries(obj)
        .reduce((acc: any, [key, value]) => {
          acc[key] = getObjectWithoutCircularLinks(value);
          return acc;
        }, {})
    } else {
      return obj
    }
  }

  return {
    data: JSON.parse(JSON.stringify(object, getCircularReplacer())),
    circularLinks: links.map((link: any) => {
      return Object.entries(link)
        .reduce((acc: any, [key, value]) => {
          acc[key] = getObjectWithoutCircularLinks(value);
          return acc;
        }, {})
    })
  }
}

const isPromise = (item: any) => {
  return (item && typeof item === 'object' && typeof item.then === 'function');
}

export const isObject = (item: any) => {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

export function mergeDeep(target: any, ...sources: any): any {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {

    Object.entries(source).forEach(([key, value]) => {
      if (isObject(value) && !isPromise(value)) {
        if (!target[key]) {
          Object.assign(target, { [key]: {} });
        }
        mergeDeep(target[key], value);
      } else {
        Object.assign(target, { [key]: value });
      }
    })
  }

  return mergeDeep(target, ...sources);
}
