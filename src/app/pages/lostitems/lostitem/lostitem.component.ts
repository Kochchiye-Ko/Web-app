import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { LostItems } from 'src/app/models/lostItem';
import { LostitemserviceService } from 'src/app/services/lostitemservice.service';

@Component({
  selector: 'app-lostitem',
  templateUrl: './lostitem.component.html',
  styleUrls: ['./lostitem.component.scss']
})
export class LostitemComponent implements OnInit {

  lostItemDetails: LostItems[];
  lostItemDetailsToEdit: LostItems;

  constructor(private lostitemserviceService: LostitemserviceService, private toster: ToastrService) {

  }
  ngOnInit() {
    this.resetForm();
    this.lostitemserviceService.getLostItems().subscribe(lostItemDetails => {
      this.lostItemDetails = lostItemDetails;
      console.log(lostItemDetails);
    });
  }

  onDelete(id: String) {
    if ((confirm("Are you sure to delete this Device?"))) {
      this.lostitemserviceService.onDelete(id);
      this.toster.error("Successfully deleted");
      this.resetForm();
    }
  }
  onEdit(items: LostItems) {
    this.lostItemDetailsToEdit = Object.assign({}, items)
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.lostItemDetailsToEdit = {
      id: null,
      date: null,
      descriptions: null,
      itemtitle: null,
      uid: null,
      userphonenumber: null,
      state: null,

    }
  }



}