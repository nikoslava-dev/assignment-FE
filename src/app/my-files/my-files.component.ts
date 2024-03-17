import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import {IFile } from "../contracts";

@Component({
  selector: 'my-files',
  templateUrl: './my-files.component.html',
  styleUrl: './my-files.component.scss'
})
export class MyFilesComponent implements OnInit {
  @Input() files: Array<IFile>;
  @Output() public fileChanged = new EventEmitter();

  selectedFileName?: string;

  ngOnInit(): void {
    this.selectedFileName = this.files && this.files.length > 0 ? this.files[0].name : undefined;
    this.fileChanged.emit(this.selectedFileName);
  }

  selectedFileChanged(fileName: string): void {
    this.selectedFileName = fileName;
    this.fileChanged.emit(fileName);
  }
}
