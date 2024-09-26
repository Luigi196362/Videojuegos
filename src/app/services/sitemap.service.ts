import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'


})
export class SitemapService {
  constructor(private http: HttpClient) { }

  downloadSitemap(url: string): Observable<string> {
    // Realizamos la solicitud HTTP GET para obtener el archivo sitemap.xml como texto
    return this.http.get(url, { responseType: 'text' });
  }
}
