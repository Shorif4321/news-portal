// (1)  https://news-portal-zeta.vercel.app = will create the app
// next.org +  create next js app with some questions + open code in vs + open material UI = what is material UI + install MUI in our project +  install icond CLI from material UI + see figma and think about layout = header footer is availabe in all pages + npm run project +
//initial setup = make components in src file = c must be small latter and expain why + make ui and shared folder in components folder + make assets (for image) folder in src folder + make utils (for function) folder in src folder
// remove priviso all things from app>page.js = HomePage with h1 wellcome mesage + remove all css form global.css, just remain tailwind css
//in shared create Navabar.js rsc + go MUI + app bar + copy responsieve nabar code + pase in Navabar.js + chage ResponsiveNabar to Navbar + go layout.js + call <Navbar> above {children } = show error + "use client" in Navbar.js top

// (2)  Navbar customization  == see Navbar.js
// remove all state and function + array (only pages array will stay) + remove AdbIcon + Typography + first Box will stay + another BOx will remove + remove button onclick + import image and show in above the BOX with Image tag + take another Box at the last + <IconButton> + <FacebookIcon>(must be import this) as clildren of <IconButton>
// chage pages array to nabItems = array in object + chage .map function + replace button to LInk + set key , heref + Button + css text-white in Button + but icon small er width small hoye thekbe = search in MUI Stack = set Stack with direction="row" + in Stack = sx={{"& svg":{clolr:'white'}}} + Appbar class bg-black

// (3) Make Footer = see Footer.js
//make Footer components in shared folder = rsc , Box with Container + import Footer after layout Children + desing
// copy footer icon from Navbar.js + copy navItems array and map with Box + Typrogray with variant + header footer er majkhane jaiga faka thakelbe =
// layout.js clildren ke <Container> tag er vitore nibo + class diye min-h-screen kore dibo

// make Header.js component = rsc + see Header.js + utils= currentDate.js
// set image with Image + import Header in Navbar components with <> react freagment + in Header.js make image height,width = 500, copy Typography fron Foote and paste In Header after Image
// chatGPT + create a js fuction thaw shows current day, month, date and year + copy code + make file in utils getCurrentDate.js + paste the cahtGPT Code + export the function  + in Header import the function + show dinamicly

// (4) create home page with Static =
// home pager ek pase news arek pase sidebar , sathe similar in look difrent in data ace
// see grid system in MUI +
// in ui make a compoment LatestNews file in LatestNews.js file + rsc + With LatestNews name + copy Card from MUI + paste in LatestNews + remove with + import card Item + import card in HomePage.js in gird items=8  + make card desing == see LatestNews.js components
//image import + text changes + Techonolgy + See Grid + copy 2 grid system from MUI + make  a card = copy desing form abobe + copy and paste 4 time
//carese Sidebar.js in "ui" + see Sidebar.js

// (5) create dynamic route and Layout
// see the category page desing + one side is navBar another is dynamic data
// for the date we make a backend server and deploy = https://the-news-portal-server.vercel.app
// https://the-news-portal-server.vercel.app/all-news = hit in browser = 4 data is sportd category + 4 is technology + 4 is entertainment like this
// https://the-news-portal-server.vercel.app/categories

//creat a folder categories in app folder (do not make page.js because ei category page ta difrent layout) + in Nabar.js see is there categories route is aviale or not
// see categories in layout.js file
// so make a layout.js with CategoriesLayout in categories + gird system + copy home Layout gird system and paste in categories layout.js with 3 and 9
//যেহেতু বাম পাশের অপশনগুলোতে ক্লিক করলে ডান পাশের ক্যাটাগরির ডাটা ডায়নামিক ভাবে চেঞ্জ হবে তাই আমার ডাইরেক্ট পেজ ক্রিয়েট করব না , ডায়নামিক ভাবে নিউজগুলো আসার জন্য ক্যাটাগরিচের ভেতর একটা ডায়নামিক রাঊট ক্রিয়েট করে ফেলব। in categories make route [categoriesId] + page.js + res = DynamicNewsPage with h1
// in categories layout.js receive children + show in grid 9
//make a folder in componetnt in ui + CategoryList = CategoryList.js + rsc + import CategoryList.js in categories layout.js in gird 3 +

// see.......  getAllCategories.js
// create a file getAllCategories.js in utils folter + normal async function with export + fethc data + get data in CategoriyList with distructuring + log() +
// explain again = সবার প্রথমে আমরা একটা ক্যাটাগরি রাউট ক্রিয়েট করেছি, সেই ক্যাটাগরি রাউট এর দুইটা পার্ট আছে এক পাটের বাটনে ক্লিক করলে আরেক পার্টে বা / রাইট সাইটের ডাটা গুলো ডায়নামিকলি লোড হবে / যার কারণে আমরা ক্যাটাগরি পেজ ক্রিয়েট না করে লেআউট ক্রিয়েট করেছি, লেআউটের একপাশে বাটন হবে আর একপাশের ডায়নামিক্যালি ডাটা লোডের অপশন হবে ,  যেখানে ডায়নামিক্যালি ডাটা লোড হবে অর্থাৎ ডাইনামিক রাঊট, এই  ডাইনামিক রাঊট লেআউটের চিলড্রেন এর মধ্যে এসে শো হবে
// এখন ডায়নামিক রাউট কিভাবে দেখাবো ? Navabar.js = categories/news  = অর্থাৎ এখন ওয়েবসাইটে ক্লিক করলেে ক্যাটাগরি ফোল্ডারে যাবে।  ক্যাটাগরি ফোল্ডারে গিয়ে সে ক্যাটাগরি পেজ খুজবে,  পেজ না পেলে তখন সে ডাইনামিক রাউন্ড অনুসারে ডায়নামিক রাউট যাবে, ডাটা ফেস করবে এবং ডাইনামিক পেজটা লেআউটের মধ্যে এসে চিলড্রেন হয়ে দেখাবে

// (6) create categories options with query parametters seee= CategoriesList.js
// Make desing CategoriesList div to Box , Typography + Divider
// Stack and map show Button + set key in Button  + show text + BUtton Text wrap with Link + see output in website with hover on button + click +
// je category te click hocce seita dinamic pager dekhabe = go to dynamic page + receive as params + show in webiste = {params.categoriesId}
// fetch data as base on category = i mean dynamic category
// kintu amra chacci na datata http://localhost:3000/categories/Entertainment  dekhak , amara chacci data ta query paramitters diye asuk. karon amader server ba api te  vercel.app/news?category=sport eivabe link hoye dekhak.
//  vercel.app/news?category=technology  vercel.app/news?category=all-news     diye hit korle sudhu oi categorir under a jotogulo deta segulo dekhabe dekhabe , backend a query parametters diye kaj kora ace
//http://localhost:3000/news?category=sport এইভাবে হিট করলে সেটা সার্চ পারামস হিসেবে ডাইনামিক পেজে আসবে এবং সেটাকে রিসিভ করে আমরা দেখাবো , এবং searsParams দিয়ে ডাটা load করবো but এই searchParams কে  আমারা বাটনে সেট করব
// http://localhost:3000/categories/news?category=dynamicPart = এরকম লিংক আমার বাটন এর মধ্যে সেট করে দিব সেটা টেমপ্লেট স্ট্রিং দিয়ে আর লাস্টের পার্টটা ডায়নামিক করে দিব কিন্তু ইউআরএল এ ক্যাপিটাল লেটার দেখাচ্ছে সেটাকে ছোট হাতের লেটার করার জন্নে toLowerCase() call করে দেব

// (7) Display Dinamic neweses according to category:
// seeee getCategoryNews.js in utils + DynamicPage.js
// create getCategoryNews.js in utils  folder + write function with experot and reveived paramitters + fetch data +  set paramitters in data API , with {cache:"no-store"} + returen
// call the function in [categoriesId] = in page.js = DynamicPage + in funciton call time give value in function = getCategoryNews(searchParams)
// make the component sync and await  +  get data from function in {} + see data.length in ui +
// ওয়েবসাইটের নেভিগেশন থেকে ক্যাটাগরিতে ক্লিক করলে আমাদেরকে কোন কিছু দেখায় না কারণ ইনিশিয়ালা ভাবে ডাটা লোড হয় না যার কারণে আমরা Navbar.js এর রাউটের এর মধ্যে ক্যাটেগরিওয়াইস ডাটা লোডের জন্নে  রাঊট সেট করে দিব। /categories/news?category=all-news
// map.in data show in card + copy grid system code form LatestNews.js + chage data dynamicly + show image = error - মাল্টিপল domain থেকে আমরা মাল্টিপল ইমেজ দেখাবো যার কারণে একটা এরর দিয়ে দিবে = solve = next.js +build-in-optimization . next.config.js  ফাইলে remotePatterns কোড কপি করে আনে দিতে হবে ; remove port and pathName code + hostname:"**" +  = allow multiple image form multiple domain + image show in ui with height and width +

//(8)  Customize news card and create details news pages
//  in Card Media make image style in SX + title short by ternariy opatetor + cut news details by using ternary opaterors
//  news a click korele news details show korbe + create [news] (not page.js) in app + [newId] = page.js = NewsDetailPage + params
// ekta dynamic router moode arekta dynamic route create korbo , prothom tate dynamic category set korbo porertate dynamic id set korbo
// news a click korel prothome category te jabe then sekhan thek id onojai NewsDetailsPage a data dekhabe  =
// prothome category then id thekbe addres bare
// new Card ke Link er modde wrap kortehbe + href={`${news.category}/${news._id}`}
// https://the-news-portal-server.vercel.app/news/64eb8dbf4db106c175ac0289 (mongoDb ID) diye hit korele ekta news details dekhabe + receive (params) in [newsId] + log(params.newsId) + show in ui
// now load data as the id = make getSingleNews.js utils with async function + receive paramas  + fetch data + server side rendarng = cahch:"no-store" + return +
// [newsId] make it async function +  get Data in [newsId] with await + distucturing data + show in UI with Card

// (9) see [newsId] / NewsDetailsPage =   customize details page and dispaly details page == see [newsId]/ NewsDetailsPage.js
// Box, container + Grid _+ Image + typograpy + desing and data chage

// (10) see not-found.js + loading.s + error.js + utils in getAllNews.js
// create not found page in app folder + loading page + error page (use client)
// chage home page data come from server = https://the-news-portal-server.vercel.app/all-news
// = create file in utils = getAllNews.js + fetch data with revalidation + return
//revalidation = revalidate হচ্ছে নতুন ডাটা আপডেট হলে কিছু সময় পরপর ফ্রন্ট এন্ড আপডেট হয়ে যাবে,
// get Data in LatestNews.js + change the LatestNews.js async + get Data with await + clg
//এইখানে একটু ট্রিক্স আছে, আমাদের পেইজে প্রথম যে ডাটা দেখাচ্ছে সেটা আমরা যে ডাটা লোড করছি সেটার ফাস্ট ইনডেক্স । {data[0].title} এইভাবে দেখাতে হবে - এইবাবে প্রথম গিডের ডাটা পরিবর্তন করব
// নিচের ডাটাগুলকে গ্রিড করব = just copy one grid and remove all grid + make grid with slice Data + image design with sx +

// run the code on productin server =  npm run build (wait) + npm start = project will work fast +
// clean the termianl + vercel + which scope do you want to deploy ? = github name
// link to existiong = n
// what is your porject nane = news-portal
//in which directory is your code located ? enter +
// want to modify = n
//wait for building and deploying
// copy the production link and hit in address bar
// নেক্সটজেস একটি বড় ফ্রেমওয়ার্ক তাই আপনাকে রেগুলারলি কাজ করতে হবে এবং নিজে নিজে  এক্সপ্লোর করতে হবে। তুমি react.js জান তো next.js ৮০% জান। আমারা 10% দিয়েছি, বাকি 10% আডভাঞ্চ জিনিস তোমাকেই শিখতে হবে। নেক্সটজেস আন্ডার দা হোড রিয়েক্টজেস





