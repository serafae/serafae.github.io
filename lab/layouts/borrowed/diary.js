
		// awesome javascript to make everything work
		function openTab(tabName) {
			var i;
			var tab = document.getElementById(tabName);
			var otherContent = document.getElementsByClassName("tabcontent");
			var defaultOpen = document.getElementById("defaultOpen");
			var buttons = document.getElementsByClassName("tablinks");
			for (i = 0; i < otherContent.length; i++) {
				otherContent[i].style.display = "none";
			}
			for (i = 0; i < buttons.length; i++) {
				buttons[i].classList.remove("active");
			}
			tab.style.display = "block";
			event.currentTarget.className += " active";
		}
		document.getElementById("defaultOpen").click();

	
