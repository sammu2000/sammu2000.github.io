var arr = [
    {
      previewImage:
        "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "cat.jpeg",
    },
    {
      previewImage:
        "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title:
        "a man and a woman trying to cook a meal together in a modern kitchen.jpg",
    },
    {
      previewImage:
        "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "bali-kelingking-beach-plastic-removal-drive.key",
    },
    {
      previewImage:
        "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "NextByk Investor Pitch 2022.ppt",
    },
    {
      previewImage:
        "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      title: "interns-performance-report-may-2022.key",
    },
  ];
  
  let list = new Array(arr.length);
  let pic = document.getElementById("myimg");
  let cap = document.getElementById("txt");
  let items = document.getElementById("left-item");
  let curInd = 0;
  let up_all_spans, up_all_buttons;
  
  function name_of_item(s) {
    if (s.length > 33)
      return s.substr(0, 18) + "..." + s.substr(s.length - 11, s.length);
    else return s;
  }
  
  function do_coloring_1(all_buttons, all_spans) {
    all_spans[curInd].style.backgroundColor = "white";
    all_buttons[curInd].style.backgroundColor = "white";
    all_spans[curInd].style.color = "black";
    all_buttons[curInd].style.color = "black";
  }
  
  function do_coloring_2(all_buttons, all_spans) {
    all_spans[curInd].style.backgroundColor = "#ae34eb";
    all_buttons[curInd].style.backgroundColor = "#ae34eb";
    all_spans[curInd].style.color = "white";
    all_buttons[curInd].style.color = "white";
  }
  
  cap.value = arr[0].title;
  pic.src = arr[0].previewImage;
  
  function add_listeners(ind, but, span) {
    span.addEventListener("click", () => {
      do_coloring_1(up_all_buttons, up_all_spans);
  
      pic.src = arr[ind].previewImage;
      cap.value = name_of_item(list[ind]);
      curInd = ind;
  
      do_coloring_2(up_all_buttons, up_all_spans);
    });
  
    cap.addEventListener("change", () => {
      if (ind == curInd) {
        list[ind] = cap.value;
        but.innerText = name_of_item(list[ind]);
      }
    });
  }
  
  for (let i = 0; i < arr.length; i++) {
    let but = document.createElement("button");
    let spic = document.createElement("img");
    let span = document.createElement("span");
    but.classList.add("button_class");
    span.classList.add("span_class");
  
    list[i] = arr[i].title;
  
    but.innerText = name_of_item(list[i]);
    spic.src = arr[i].previewImage;
  
    span.appendChild(spic);
    span.appendChild(but);
  
    if (i == 0) {
      span.style.backgroundColor = "#ae34eb";
      but.style.backgroundColor = "#ae34eb";
      span.style.color = "white";
      but.style.color = "white";
    }
  
    add_listeners(i, but, span);
  
    items.appendChild(span);
  }
  
  let all_spans = items.getElementsByClassName("span_class");
  let all_buttons = items.getElementsByClassName("button_class");
  
  up_all_buttons = all_buttons;
  up_all_spans = all_spans;
  
  document.addEventListener("keydown", (e) => {
    if (e.key == "ArrowUp") {
      do_coloring_1(all_buttons, all_spans);
  
      curInd = (curInd - 1 + arr.length) % arr.length;
      pic.src = arr[curInd].previewImage;
      cap.value = name_of_item(list[curInd]);
  
      do_coloring_2(all_buttons, all_spans);
    } else if (e.key == "ArrowDown") {
      do_coloring_1(all_buttons, all_spans);
  
      curInd = (curInd + 1) % arr.length;
      pic.src = arr[curInd].previewImage;
      cap.value = name_of_item(list[curInd]);
  
      do_coloring_2(all_buttons, all_spans);
    }
  });
  
  