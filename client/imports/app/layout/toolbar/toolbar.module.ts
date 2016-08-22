import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { ToolbarActions } from './toolbar.actions';
import { ToolbarReducer } from './toolbar.reducer';
import { ActionReducer } from '@ngrx/store';
import { ToolbarEffects } from './toolbar.effects';

@NgModule({
    imports: [CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [ToolbarComponent],
    providers: [ToolbarActions],
    exports: [ToolbarComponent],

})
export default class ToolbarModule {
    static reducers(): {[key: string]: ActionReducer<any>} {
        return { toolbar: ToolbarReducer };
    }

    static effects(): any[] {
        return [ToolbarEffects];
    }
}
