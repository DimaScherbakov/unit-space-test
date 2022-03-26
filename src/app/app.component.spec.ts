import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { GIFObjectExtended } from './interfaces/giphy';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports      : [
                RouterTestingModule,
            ],
            declarations : [
                AppComponent,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
    });

    it('should create the app', () => {
        expect(app).toBeTruthy();
    });

    it('images should be empty on init', () => {
        expect(fixture.componentInstance.images.length).toEqual(0);
    });

    it('setImages should set new images to a state', function () {
        fixture.componentInstance.images = [{},{},{}] as GIFObjectExtended[];
        expect(fixture.componentInstance.images.length).toEqual(3);
    });

    it('view should display count of images', function () {
        const imagesCount = fixture.debugElement.query(By.css('.app--hint'));
        fixture.detectChanges();
        expect(imagesCount.nativeElement.innerHTML).toEqual('total images count: 0');
    });
});
