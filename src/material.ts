import {MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatDialogModule,
        MatOptionModule,
        MatSelectModule,
        MatTabsModule,
        MatSortModule,
        MatButtonToggleModule,
        MatTableModule,
        MatNativeDateModule,
        MatSlideToggleModule
        
    } from '@angular/material';
    import {MatListModule} from '@angular/material/list';
    import {MatDatepickerModule} from '@angular/material/datepicker';
   
import { MatPaginatorModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[MatSlideToggleModule,MatPaginatorModule, MatListModule, MatButtonModule,MatCheckboxModule,MatSidenavModule,MatToolbarModule,MatInputModule,MatIconModule,MatCardModule,MatDialogModule,MatOptionModule,MatSelectModule,MatTabsModule,MatSortModule,MatButtonToggleModule,MatTableModule,MatDatepickerModule,MatNativeDateModule],
    exports:[MatSlideToggleModule,MatPaginatorModule, MatListModule,MatButtonModule,MatCheckboxModule,MatSidenavModule,MatToolbarModule,MatInputModule,MatIconModule,MatCardModule,MatDialogModule,MatOptionModule,MatSelectModule,MatTabsModule,MatSortModule,MatButtonToggleModule,MatTableModule,MatDatepickerModule,MatNativeDateModule]
})
export class MaterialModule{

}