import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';
import { GIFObjectExtended } from '../../interfaces/giphy';

describe('GalleryComponent', () => {
    let component: GalleryComponent;
    let fixture: ComponentFixture<GalleryComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations : [GalleryComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GalleryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('should input', () => {
        it('images', () => {
            component.images = [{}, {}, {}] as GIFObjectExtended[];
            expect(component.images.length).toEqual(3);
        });

        it('current page', () => {
            component.page = 2;
            expect(component.page).toEqual(2);
        });

        it('page size', () => {
            component.pageSize = 2;
            expect(component.pageSize).toEqual(2);
        });
    });

    describe('start', () => {
        const startTestMock = [
            {
                state : {
                    page     : 2,
                    pageSize : 8,
                },
                equal : 8,
            },
            {
                state : {
                    page     : 3,
                    pageSize : 8,
                },
                equal : 16,
            },
            {
                state : {
                    page     : 3,
                    pageSize : 9,
                },
                equal : 18,
            },
        ];

        it('by default is 0', () => {
            expect(component.start).toEqual(0);
        });

        startTestMock.forEach(testCase => {
            it(`with page:${testCase.state.page}, pageSize:${testCase.state.pageSize} should be ${testCase.equal}`, () => {
                component.page = testCase.state.page;
                component.pageSize = testCase.state.pageSize;
                expect(component.start).toEqual(testCase.equal);
            });
        });
    });

    describe('end', () => {
        const endTestMock = [
            {
                state : {
                    page     : 2,
                    pageSize : 8,
                },
                equal : 16,
            },
        ];

        it('by default is 0', () => {
            expect(component.end).toEqual(9);
        });

        endTestMock.forEach(testCase => {
            it(`with page:${testCase.state.page}, pageSize:${testCase.state.pageSize} should be ${testCase.equal}`, () => {
                component.page = testCase.state.page;
                component.pageSize = testCase.state.pageSize;
                expect(component.end).toEqual(testCase.equal);
            });
        });
    });
});
