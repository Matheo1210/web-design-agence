import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface Project {
  name: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portfolio-matheo';

  public projectsInCategory: Project[] = [];
  public selectedProject: string = '';
  public projectDescription: string = '';
  public selectedCategory: string = 'all';
  public searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      searchQuery: [''],
    });
  }

  ngOnInit(): void {
    this.showCategory('all');
    this.initializeProjectDescriptions();
  }

  private initializeProjectDescriptions(): void {
    this.projectsInCategory = [
      {
        name: 'Faurecia',
        description:
          'Une expérience utilisateur optimale, assurant une parfaite réactivité même face à des volumes de données massifs, grâce à une conception UX méticuleuse et adaptée.',
      },
      {
        name: 'QuizKick',
        description:
          'Le projet QuizKick se caractérise par une interface utilisateur simple tout en offrant une multitude de fonctionnalités pour la création de quiz.',
      },
      {
        name: 'Mercy-Time',
        description:
          'MercyTime offre une expérience utilisateur très design, assurant une navigation agréable sur le site.',
      },
      {
        name: 'NeverLost',
        description:
          'NeverLost, dotée d un design moderne, permet à l utilisateur de trouver son chemin de manière simple et rapide.',
      },
    ];
  }

  public showCategory(category: string): void {
    this.selectedCategory = category;

    if (category === 'all') {
      this.initializeProjectDescriptions();
    } else if (category === 'web') {
      this.projectsInCategory = [
        { name: 'Faurecia', description: 'Description de Faurecia.' },
        { name: 'Quizkick', description: 'Description de Quizkick.' },
      ];
    } else if (category === 'mobile') {
      this.projectsInCategory = [
        { name: 'NeverLost', description: 'Description de NeverLost.' },
      ];
    }
  }

  public searchProjects(): void {
    const query = this.searchForm.get('searchQuery')?.value;

    if (!query || query.trim() === '') {
      this.showCategory(this.selectedCategory);
    } else {
      this.projectsInCategory = this.projectsInCategory.filter((project) =>
        project.name.toLowerCase().includes(query.toLowerCase())
      );
    }
  }

  public activateSelectedProject(): void {
    const query = this.searchForm.get('searchQuery')?.value;

    if (query && query.trim() !== '') {
      const foundProject = this.projectsInCategory.find((project) =>
        project.name.toLowerCase().includes(query.toLowerCase())
      );

      if (foundProject) {
        this.selectProject(foundProject);
      }
    }
  }

  public selectProject(project: Project): void {
    this.selectedProject = project.name;
    this.projectDescription = `<strong>UX - DESIGN</strong><br><br>${project.description}`;
  }
}
