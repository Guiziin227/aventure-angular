import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { filter, map } from "rxjs/operators";
import { LayoutProps } from "./layoutprops";

@Component({
  selector: "app-layout",
  standalone: false,
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.scss",
})
export class LayoutComponent implements OnInit {
  props: LayoutProps = { title: "", subtitle: "" };

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(() => this.activatedRoute.firstChild !== null),
        map(() => this.obterPropriedades())
      )
      .subscribe((props: LayoutProps) => {
        this.props = props;
      });
  }

  obterPropriedades(): LayoutProps {
    let childRoute = this.activatedRoute.firstChild;

    while (childRoute?.firstChild) {
      childRoute = childRoute.firstChild;
    }

    return childRoute?.snapshot.data as LayoutProps;
  }
}
