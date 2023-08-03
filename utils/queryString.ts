export const queryString = {
  stringify: (params: any) => {

    return Object.entries(params).map(([key, value]: any) => {
      if (!value) {
        return null;
      }

      return `${key}=${value || ''}`;
    })
      .filter(Boolean)
      .join('&')
  }
}
