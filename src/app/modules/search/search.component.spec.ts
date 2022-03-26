import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { serviceMocks } from '../../mocks/services.mock';
import { of } from 'rxjs';
import { SearchService } from './search.service';
import { GIFObjectExtended } from '../../interfaces/giphy';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations : [SearchComponent],
            providers    : [{ provide : SearchService, useValue : serviceMocks.searchService }],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('search', () => {
        const query = '#funnycat';

        it('should get stickers by user query', () => {
            component.search(of(query)).subscribe(() => {
                expect(serviceMocks.searchService.getStickers).toHaveBeenCalledOnceWith(query);
            })
        });

        it('should emit found images', () => {
            const images = [{},{},{}] as GIFObjectExtended[];
            // todo: how?
            component.search(of(query)).subscribe(() => {
                expect(component.result.emit).toHaveBeenCalledOnceWith(images);
            })
        });

        it('takes user input', () => {
            // todo: spy on search an check if it has been called after user input
        });
    });
});
