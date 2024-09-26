import { Component, OnInit } from '@angular/core';
import { SitemapService } from '../services/sitemap.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  providers: [SitemapService],
  imports: [HttpClientModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {

  sitemapContent: string = '';
  constructor(private sitemapService: SitemapService) { }
  ngOnInit(): void {
    const sitemapUrl = 'https://firebasestorage.googleapis.com/v0/b/mycv-n4ndo.appspot.com/o/sitemap.xml?alt=media&token=91be6eb4-4ffd-415d-afa7-a16f4a0b8aba';
    this.sitemapService.downloadSitemap(sitemapUrl).subscribe(
      data => {
        this.sitemapContent = data;  // Almacena el contenido del sitemap en una variable
        console.log('Sitemap downloaded:', this.sitemapContent);
      },
      error => {
        console.error('Error downloading sitemap:', error);
      }
    );
  }

}
