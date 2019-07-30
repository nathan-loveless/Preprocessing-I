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

	connection.open("Get", "scripts/test.xml", false);
	connection.setRequestHeader('Content-Type', 'text/xml');
	connection.send(null);	
	var xmlDoc = connection.responseXML;
	var root = xmlDoc.documentElement.childNodes;
	console.log(root);
	
	//var street;
	//var town;
	//var phone;
	var work = '';
	var collegeInfo = '';
	var other = '<ul>';
	var percentages = '';	
	
	for(var i = 0; i < root.length; i++)
	{					
			var subitem = root[i];
		
			switch(subitem)
			{				
				case 'Data':
					var child = root[i].children;
					console.log('This is child: ' + child);

						for(j = 0; j < child.children.length; ++i)
						{
							var subChild = child.children[j];
							
							switch(subChild)
							{
								case 'Name':
									var name = subChild.getElementsByTagName('Name');
									var divElement = document.getElementById('name');
									divElement.innerHTML = '<h1>' + name + '</h1>';
									break;

								case 'Title':
									var title = subChild.getElementsByTagName('Title');
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
									var street = subChild.getElementsByTagName('Street')
									divElement = document.getElementById('street');
									divElement.innerHTML = street;
									break;

								case 'Town':
									town = subChild.getElementsByTagName('Town'); 
									divElement = document.getElementById('town');
									divElement.innerHTML = town;
									break;

								case 'Phone':
									phone = subChild.getElementsByTagName('Phone');
									divElement = document.getElementById('phone');
									divElement.innerHTML = phone;
									break;

								case 'Email':
									var email = subChild.getElementsByTagName('Email'); 
									divElement = document.getElementById('email');
									divElement.innerHTML = street + town + phone + email;
									break;

								case 'Summary':
									var summPara = subChild.getElementsByTagName('Summary');
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