const slider = document.getElementById("slider");

const gallery = {

nature:[
"images/nature/265e167b-b1f9-4225-bd86-7065646105c6.jpeg",
"images/nature/284baa35-11f5-47af-9deb-45e5693b7edf.jpeg",
"images/nature/88380d83-744f-429a-b8ad-33fe28787fe0.jpeg",
"images/nature/91acdda4-03da-4059-8746-64ee24ec26e8.jpeg",
"images/nature/91c589ac-f5db-40c9-b525-6d0558978466.jpeg",
"images/nature/91f35237-3829-4b6c-8c85-85a246ca7c3c.jpeg",
"images/nature/9be97f54-77f7-457c-9bc0-60a0723ed147.jpeg",
"images/nature/c8bca373-d23d-46a4-8572-9b2f36a94ebb.jpeg",
"images/nature/d5c07036-151d-455a-a03c-58cc5eb933cd.jpeg",
"images/nature/e3aa2334-6ba5-4ce4-9284-ed056dde5928.jpeg",
"images/nature/fc51767c-2014-4f46-ba95-ac27e6731732.jpeg"
],

cars:[
"images/car/011bfab7-0c85-4453-952b-914b0b3a618e.jpeg",
"images/car/0172375f-27f8-4daa-b478-623d374debde.jpeg",
"images/car/76865677-161b-43c1-b95c-1fa5a3dd3e6a.jpeg",
"images/car/9febde86-8a41-42a2-8d9f-b0978156d2ed.jpeg",
"images/car/a8bbfc99-13c5-479f-943a-6689dd8df492.jpeg",
"images/car/aaf078aa-7747-4a80-b38d-0873221765e5.jpeg",
"images/car/b9a1d4c9-0dbb-4871-bcff-df548b5c16f1.jpeg",
"images/car/bb46190c-f9b8-4f89-8000-871ba64dacd3.jpeg",
"images/car/Live Wallpaper _ Visit Site to Download _ Cool car pictures, Good looking cars, Moving wallpapers.jpeg",
"images/car/Rolls Royce Mansory 🔥.jpeg",
"images/car/The Best 10 Man-Made Intelligence-Planned Vehicles Representing things to come_.jpeg"
],

birds:[
"images/birds/01956880-0c88-4c59-b3c6-26939075183c.jpeg",
"images/birds/29ff855f-80f7-4c41-a1e1-48f05f454e1f.jpeg",
"images/birds/3174551d-c3ab-4d06-a308-2b0bd86e52aa.jpeg",
"images/birds/3b589ffc-d459-4d56-bd6a-da0bbe695233.jpeg",
"images/birds/5c515b48-2249-4350-9257-29d9b74ba618.jpeg",
"images/birds/7dbf0e0f-c734-4e6d-a3f7-009346ff9438.jpeg",
"images/birds/9d754445-c6d1-45e6-b52f-d9a7db2a899c.jpeg",
"images/birds/ba8c4d79-663a-4afa-a6c8-6008d99c71c1.jpeg",
"images/birds/cb15072f-813f-4528-9087-f9514aa4c3e7.jpeg",
"images/birds/fb10d7bf-5c24-4801-81c2-cc4632f208f8.jpeg"
],

wildanimals:[
"images/wild amimal/698ef31d-d26d-40c4-9281-ecec44bcc18c.jpeg",
"images/wild amimal/6a9aeacd-ae2b-4a4e-a1d4-2d55cac5e93c.jpeg",
"images/wild amimal/6ee2ed85-ed63-42ac-9652-d40e70b319b7.jpeg",
"images/wild amimal/88f8c577-25d5-4634-97ed-50dde2c706a5.jpeg",
"images/wild amimal/894842cb-2353-47b1-a14c-936af3fcebb8.jpeg",
"images/wild amimal/8a654c13-ee9f-4359-ac05-a06c27a8b8e5.jpeg",
"images/wild amimal/8a97eeb2-1658-43b0-a1f9-f7d5579d845a.jpeg",
"images/wild amimal/90a79040-03c6-4748-940f-71d890f6f974.jpeg",
"images/wild amimal/bf298198-fc90-4d05-9d05-3894fd317f71.jpeg",
"images/wild amimal/dddd6538-51fe-4f68-8852-2a67ff1798e2.jpeg",
"images/wild amimal/f3f4dead-78a0-4860-abcf-05e715dbe354.jpeg"
],

flowers:[
"images/flower/1cc3b217-a6c5-43cd-888b-8819ca638114.jpeg",
"images/flower/22d317d6-f848-476b-836c-2605ed85e49b.jpeg",
"images/flower/322d8093-5009-4925-9b2c-73857e6f551b.jpeg",
"images/flower/89da7123-0c96-445d-8aff-d2a5e8ab2d05.jpeg",
"images/flower/93c143b9-0f90-4e18-a606-d7cd1b4e8f4e.jpeg",
"images/flower/c04596da-0a4b-4a9f-b528-60125ba57069.jpeg",
"images/flower/c939e0ef-f56f-47bc-bc69-d48e704afdbe.jpeg",
"images/flower/d57b661e-1d1e-47d6-bc6a-27ba238092ca.jpeg",
"images/flower/e3e9affe-99fc-44f8-b337-6978637bc975.jpeg",
"images/flower/fabd7d4c-8259-4068-a3a1-9f825b8ffb6f.jpeg",
"images/flower/fed18e14-aca0-43cd-a25c-ef3d22c15964.jpeg"
],

bikes:[
"images/bike/05ea2e1b-9459-4956-94b8-409ca14dce85.jpeg",
"images/bike/1e34bd93-1ec8-4bbc-ac0c-c9308777cb87.jpeg",
"images/bike/417aeac8-c311-4794-b754-2ef706b9f2cb.jpeg",
"images/bike/4cbe0c33-70e1-4c9d-9a34-944519c54f84.jpeg",
"images/bike/6f0851c7-7752-46a6-a4bc-e63271c89358.jpeg",
"images/bike/7490547c-fc39-463b-806e-27a28c009b83.jpeg",
"images/bike/822193a7-edc3-49d3-865b-fc735b8fcfa9.jpeg",
"images/bike/889a2e55-23d7-42d0-b863-e60462042887.jpeg",
"images/bike/8b321f79-f1d5-4830-a448-403b01629806.jpeg",
"images/bike/a9b8694b-7c85-4628-9180-3b979b14cd4c.jpeg",
"images/bike/bfa55686-42d8-4cdd-92f7-dac5071c9528.jpeg"
],

beach:[
"images/beach/286dcb29-6c47-451d-813e-58a3b89c43a7.jpeg",
"images/beach/2db556a3-ce93-4445-b278-9c4f9a00a7e3.jpeg",
"images/beach/39742e14-18fb-417d-bf06-c19d767fb092.jpeg",
"images/beach/3b3df530-2473-4cfa-ae36-310b5885c391.jpeg",
"images/beach/3d079fad-496f-402b-af52-6c8ecaa5be15.jpeg",
"images/beach/587cd327-690d-4828-b626-2222cb3c5ec6.jpeg",
"images/beach/6cc2c8d7-ca65-452d-b87b-3d3350abb171.jpeg",
"images/beach/8325dd54-4a2f-41b9-b7fc-d4fbcb9ee42d.jpeg",
"images/beach/96e2bc4f-beb4-4237-ae8f-dc703309db56.jpeg",
"images/beach/bc74e8f4-58dc-4a37-8bcd-6f0126a1ccd9.jpeg",
"images/beach/cbbeeb9d-b5b7-4c64-b403-cd206a83cec8.jpeg"
]
};

function loadCategory(category){

slider.innerHTML="";

const images=gallery[category];
const total=images.length;

images.forEach((src,index)=>{

const span=document.createElement("span");

span.style.transform=
`rotateY(${index*(360/total)}deg) translateZ(500px)`;

span.innerHTML=`<img src="${src}" alt="">`;

slider.appendChild(span);

});

}

loadCategory("nature");