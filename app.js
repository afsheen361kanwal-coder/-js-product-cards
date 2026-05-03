var products = [

    {
        pr_id: "01",
        pr_name: "Mobile",
        pr_model: "Iphone 17 pro",
        pr_colour: "Orange",
        pr_guranty: "3 year",
        pr_price: "400000",
        pr_image:"https://dynamiteaccessories.pk/wp-content/uploads/2025/11/Apple-iPhone-Silicone-Case.jpg"
    },

  {
        
        pr_id: "02",
        pr_name: "Loptop",
        pr_model: "Macbook 2 ",
        pr_colour: "Black",
        pr_guranty: "7 year",
        pr_price: "200000",
        pr_image:"https://hips.hearstapps.com/hmg-prod/images/best-apple-macbook-pro-laptop-001-65c2afc3bdde4.jpg?crop=1xw:1xh;center,top&resize=1200:*"
    },  {
        pr_id: "03",
        pr_name: "LED",
        pr_model: "P17A",
        pr_colour: "Black",
        pr_guranty: "10 year",
        pr_price: "20000",
        pr_image:"https://images.philips.com/is/image/philipsconsumer/b9803f34eb74494582e9b014012a3fa6?$pnglarge$&wid=1250"
    }


]
var getdiv= document.querySelector("#main")

for(var i=0 ; i<products.length ; i++){
var mydata= products[i]
getdiv.innerHTML+=`
<div class="abc">
<img src="${mydata.pr_image}" alt="" class="card-img">
<p>${mydata.pr_id}</p>
<p>${mydata.pr_name}</p>
<p>${mydata.pr_model}</p>
<p>${mydata.pr_colour}</p>
<p>${mydata.pr_guranty}</p>
<p>${mydata.pr_price}</p>
<button class="btn">Buy Now</button>
</div>`
}

