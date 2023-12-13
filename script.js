function shareURL(){
            let url = document.getElementById("share");
            url.value = window.location.href;
            navigator.clipboard.writeText(url.value);
            alert("Link copied!");
        }