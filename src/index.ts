import Scrollbar from "smooth-scrollbar";
import { VueConstructor } from "vue/types/vue";

export default class VueSmoothScrollbar {
  static install(Vue: VueConstructor, options: any) {
    Vue.prototype.$scrollbar = Scrollbar;
    (Vue as any).scrollbar = Scrollbar;
    Vue.directive("smooth-scrollbar", {});
  }
}
