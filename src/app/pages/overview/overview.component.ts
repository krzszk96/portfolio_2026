import { Component } from '@angular/core';
import { About } from '../../components/about/about.component';
import { Experience } from '../../components/experience/experience.component';
import { Projects } from '../../components/projects/projects.component';
import { Skills } from '../../components/skills/skills.component';
import { Certificates } from '../../components/certificates/certificates.component';
import { Education } from '../../components/education/education.component';
import { GithubActivity } from '../../components/github-activity/github-activity.component';

@Component({
  selector: 'app-overview',
  imports: [About, Experience, Projects, Skills, Certificates, Education, GithubActivity],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class Overview {}
