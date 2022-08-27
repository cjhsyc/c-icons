export const CIconsResolver = (): any => {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (/^Ci[A-Z]/.test(name)) {
        return {
          name: name.slice(2),
          from: '@cjhsyc/icons',
        }
      }
      if(/^CIcon$/.test(name)) {
        return {
          from: '@cjhsyc/icons',
          sideEffects: '@cjhsyc/icons/style'
        }
      }
    },
  }
}
