declare module '*.vue' {
  import { ComponentOptions,VueConstructor } from 'vue'
  const component: ComponentOptions<Vue> & {
    install(app: VueConstructor): void,
    entryName: string;
  }
  export default component
}
