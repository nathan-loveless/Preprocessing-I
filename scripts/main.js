// JavaScript Document
var connection = null;

function displayLists()
{
	
	if (window.XMLHttpRequest) 
	{
     	connection = new XMLHttpRequest();
    }
	
    else 
  	{
	  connection = new ActiveXObject("Microsoft.XMLHTTP");
  	}

	connection.open("Get", "scripts/rdata.xml", false);
	connection.setRequestHeader('Content-Type', 'text/xml');
	connection.send(null);	
	var xmlDoc = connection.responseXML;
	var root = xmlDoc.documentElement.childNodes;
	//console.log(root);
	
	//var street;
	//var town;
	//var phone;
	//var work = '';
	//var collegeInfo = '';
	//var other = '<ul>';
	//var percentages = '';
	
	for(var i = 0; i < root.length; i++)
	{					
			var subitem = root[i];
		
			switch(subitem.nodeName)
			{
				case 'Data':
					
					var child = subitem.children;
					
						for(j = 0; j < child.length; ++j)
						{
					
							//var subChild = child[j].nodeName; //console.log(child[j].nodeName);
							//var subChild = child.children[j];
							
							switch(child[j].nodeName)
							{
								case 'Name':
									//var name = child[j].getElementsByTagName('Name');
									var name = child[j].innerHTML;
									var divElement = document.getElementById('name');
									divElement.innerHTML = '<h1>' + name + '</h1>';
									break;

								case 'Title':
									//var title = subChild.getElementsByTagName('Title');
									var title = child[j].innerHTML;
									divElement = document.getElementById('title');
									divElement.innerHTML = '<h2>' + title + '<h2>';
									break;

								/* This is not used in the current resume, but keeping it*/
								/*case 'Profile':
									var profile = subChild.getElementsByTagName('Profile'); 
									divElement = document.getElementById('profile_container');
									divElement.innerHTML = profile;												
									break;*/

								case 'Street':
									//var street = subChild.getElementsByTagName('Street')
									var street = child[j].innerHTML;
									divElement = document.getElementById('street');
									divElement.innerHTML = street;
									break;

								case 'Town':
									//town = subChild.getElementsByTagName('Town');
									var town = child[j].innerHTML;
									divElement = document.getElementById('town');
									divElement.innerHTML = town;
									break;

								case 'Phone':
									//phone = subChild.getElementsByTagName('Phone');
									var phone = child[j].innerHTML;
									divElement = document.getElementById('phone');
									divElement.innerHTML = phone;
									break;

								case 'Email':
									//var email = subChild.getElementsByTagName('Email'); 
									var email = child[j].innerHTML;
									divElement = document.getElementById('email');
									divElement.innerHTML = street + town + phone + email;
									break;

								case 'Summary':
									//var summPara = subChild.getElementsByTagName('Summary');
									var summPara = child[j].innerHTML;
									divElement = document.getElementById('about-me');
									divElement.innerHTML = summPara;
									break;

								default:
									// Nothing
							}

						}
			}
	}
}