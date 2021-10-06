import { darkTheme } from 'naive-ui'
export default {
  setTheme({ state }: any, dark: boolean): void {
    state.theme = dark ? darkTheme : null
  },
}
