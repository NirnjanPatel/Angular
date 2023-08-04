import { TestBed } from '@angular/core/testing';
import { Post } from '../models/post.model';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('be able to retrieve posts from the API bia GET', () => {
    const dummyPosts: Post[] = [{
      userId: '1',
      id: 1,
      body: 'Hello World',
      title: 'testing Angular'
    }, {
      userId: '2',
      id: 2,
      body: 'Hello World2',
      title: 'testing Angular2'
    }];
    service.getPostData().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(dummyPosts);
    });
    const request = httpMock.expectOne(`${service.ROOT_URl}/posts`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyPosts);
  });

});
