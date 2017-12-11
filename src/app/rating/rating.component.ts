import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { rateService } from "../app.service";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

    private addEntityForm: FormGroup; 
    private formValid: boolean = false;
    private rating=0;private msg="";
    private show=false;
  constructor(private formBuilder: FormBuilder,private rateService : rateService,private router: Router) {
    this.ratingForm()
  }
  
  ratingForm(){

    this.addEntityForm = this.formBuilder.group({
    Name        : ["", [Validators.required, Validators.minLength(4), Validators.maxLength(80)]],
    DOB  : ["", [Validators.required]],
    feedback: ["", []],
    foodRate:["",[]],
    ambianceRate:["",[]],
    serviceRate:["",[]],
    priceRate:["",[]]
  });
}

  rateSubmit()
  {
    var rateDetails= this.addEntityForm.value;
    var requestObject = {
      "name"   :  rateDetails.Name, 
      "dOB" :   new Date(rateDetails.DOB),
      "feedBack"   :   rateDetails.FeedBack,
      "foodRate": rateDetails.foodRate,
      "ambianceRate": rateDetails.ambianceRate,
      "serviceRate": rateDetails.serviceRate,
      "priceRate": rateDetails.priceRate,
          }
    
          if(requestObject.name.length !=0 &&  requestObject.dOB!=null)
            {
              this.show = false;

              if(requestObject.foodRate.length!=0 && requestObject.ambianceRate.length!=0 && requestObject.serviceRate.length!=0 && requestObject.priceRate.length!=0)
                  {
                    this.addRating(rateDetails);
                  }
              else
                  {
                    this.show = true;
                    this.msg = "Please fill the rating";
                  }
 
            }
            else{
              this.show = true;
              this.msg = "PLease enter the name and DOB"
            }

  }

  addRating(requestObject){
    this.rateService.addRating(requestObject)
    .subscribe(
        (responseObject) => {
           // alert("thank you for your feed back")
              if(responseObject.statusCode==0)
              {
                this.router.navigate(['thank']);
              }
              else
              {
                this.show = true;
                this.msg = "Please try again later"
              }
            
        },
        err => {
            
        }
    );
}

  ngOnInit() {
  }

}
