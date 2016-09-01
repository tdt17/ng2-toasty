import { ToastyComponent } from './src/toasty.component';
import { ToastComponent } from './src/toast.component';
import { ToastyService, ToastyConfig } from './src/toasty.service';
export * from './src/toasty.component';
export * from './src/toast.component';
export * from './src/toasty.service';
export * from './src/toasty.utils';
declare var _default: {
    providers: (typeof ToastyConfig | typeof ToastyService)[];
    directives: (typeof ToastyComponent | typeof ToastComponent)[];
};
export default _default;
