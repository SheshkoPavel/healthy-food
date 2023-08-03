export const splitArray = (array: any, perChunk: number) => {
  return array.reduce((resultArray: any, item: any, index: number) => {
    const chunkIndex = Math.floor(index / perChunk)

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] // start a new chunk
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])
}

export const isPageAvailable = (page: any, isAuthorized: boolean) => {
  const role = isAuthorized
    ? 'Member'
    : 'Public'

  const map: any = {
    'Public': ['Public'],
    'Member': ['Member', 'Public'],
  }

  return (page?.audience?.type || []).some((item: any) => map[role].includes(item))
}

export const isAvailable = (allowedRoles: any, isAuthorized: boolean) => {
  const role = isAuthorized
    ? 'Member'
    : 'Public'

  const map: any = {
    'Public': ['Public'],
    'Member': ['Member', 'Public'],
  }

  return allowedRoles.some((item: any) => map[role].includes(item))
}

export const getAvailabelItems = (arr: any, getAudience: any, isAuthorized: boolean) => {
  return [...(arr || [])]
    .filter((item: any) => isAvailable(getAudience(item), isAuthorized))
    .sort((a: any, b: any) => {
      const aV = getAudience(a).includes('Member');
      const bV = getAudience(b).includes('Member');
      if (aV < bV) {
        return 1
      }

      if (aV > bV) {
        return -1
      }

      if (aV === bV){
        return getAudience(a).length - getAudience(b).length
      }

      return 0;
    })
}

export const getSortFn = (getterFn: any, desc = false) => (a: any, b: any) => {
  const aV = getterFn(a);
  const bV = getterFn(b);

  if (aV > bV) {
    return desc ? -1 : 1
  }

  if (aV < bV) {
    return desc ? 1 : -1
  }

  return 0;
}

export const getSortFnCalendar = (getValue: any) => (a: any, b: any) => { //TODO, remove?
  const A = getValue(a);
  const B = getValue(b);

  if (A > B) {
    return 1
  }
  if (A < B) {
    return -1
  }

  return 0
};
