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
	
	var subitem;
	var subchild;
	var child;
	var text;
	var div;
	
	for(var i = 0; i < root.length; i++)
	{					
			subitem = root[i];
		
			switch(subitem.nodeName)
			{
				case 'Data':					
					child = subitem.children;
					
					var street, town = '';
					
						for(var j = 0; j < child.length; ++j)
						{							
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
									
								case 'Birthday':
									//var title = subChild.getElementsByTagName('Title');
									var birthday = child[j].innerHTML;
									divElement = document.getElementById('birthday');
									divElement.innerHTML = birthday;
									break;
									
								case 'Email':
									//var email = subChild.getElementsByTagName('Email'); 
									var email = child[j].innerHTML;
									divElement = document.getElementById('email');
									divElement.innerHTML = email;
									break;
									
								case 'Phone':
									//phone = subChild.getElementsByTagName('Phone');
									var phone = child[j].innerHTML;
									divElement = document.getElementById('phone');
									divElement.innerHTML = phone;
									break;

								/* This is not used in the current resume, but keeping it*/
								/*case 'Profile':
									var profile = subChild.getElementsByTagName('Profile'); 
									divElement = document.getElementById('profile_container');
									divElement.innerHTML = profile;												
									break;*/

								case 'Street':
									//street = child[j].getElementsByTagName('Street')
									street = child[j].innerHTML;
									//divElement = document.getElementById('street');
									//divElement.innerHTML = street;
									break;

								case 'Town':
									//town = subChild.getElementsByTagName('Town');
									town = child[j].innerHTML;
									//divElement = document.getElementById('town');
									//divElement.innerHTML = town;
									break;

								case 'Summary':
									//var summPara = subChild.getElementsByTagName('Summary');
									var summPara = child[j].innerHTML;
									divElement = document.getElementById('about-me');
									//divElement.innerHTML = summPara;
									break;
									
								default:
									// Nothing
									
									
							}
							
							divElement = document.getElementById('address');
							console.log(town);
							divElement.innerHTML = '<p>' + street + '</p><p>' + town + '</p>';

						}
					
				break;
					
				case 'Work':					
					child = subitem.children;

					for(j = 0; j < child.length; j++)
					{
						subchild = child[j].children;
						div = document.createElement('div');
						text = '';
						
						for(var k = 0; k < subchild.length; k++)
						{
								switch(subchild[k].nodeName)
								{
									case 'Employer':
										text += '<p>' + subchild[k].innerHTML + '</p>';
										break;
									
									case 'Dates':
										text += '<p>' + subchild[k].innerHTML + '</p';	
										break;
									
									case 'Job_Description':
										text += '<p>' + subchild[k].innerHTML + '</p';	
										break;
									
									default:
										// Nothing
								}	
							}	
						div.innerHTML = text;
						document.getElementById('work-experience').append(div);
						
					}
					
				break;
					
				case 'Education':					
					child = subitem.children;

					for(j = 0; j < child.length; j++)
					{
						subchild = child[j].children;
						div = document.createElement('div');
						text = '';
						
						for(k = 0; k < subchild.length; k++)
						{
								switch(subchild[k].nodeName)
								{
									case 'Title':
										text += '<p>' + subchild[k].innerHTML + '</p>';
										break;
									
									case 'Location':
										text += '<p>' + subchild[k].innerHTML + '</p>';	
										break;
									
									case 'Dates':
										text += '<p>' + subchild[k].innerHTML + '</p>';	
										break;
										
									case 'Degree':
									text += '<p>' + subchild[k].innerHTML + '</p>';	
									break;
									
									default:
										// Nothing
								}	
							}	
						div.innerHTML = text;
						document.getElementById('education').append(div);
						
					}
					
					break;
					
				case 'Skills':					
					child = subitem.children;

					for(j = 0; j < child.length; j++)
					{
						subchild = child[j].children;
						
						div = document.createElement('div');
						var skillBar = document.createElement('div');
						var skillDiv = document.createElement('div');
						var skillDiv2 = document.createElement('div');
						
						text = '';
						var mastery = '';
						
						for(k = 0; k < subchild.length; k++)
						{
								switch(subchild[k].nodeName)
								{
									case 'Title':
										text = subchild[k].innerHTML;
										break;
									
									case 'Mastery':
										mastery = subchild[k].innerHTML;	
										break;
									
									default:
										// Nothing
								}	
							}
						
						// We need to get the value of the mastery, we will actually sew 2 divs together for this	
						var gainedSkill = mastery*2;
						var lostSkill = (100 - mastery) * 2;
						
						div.innerHTML = text;
						document.getElementById('education').append(div);
						
						// div contains our skill name and skill bars
						div.style.width = '400px';
						div.style.marginTop = '10px';
						div.style.marginBottom = '10px';
						div.innerHTML = text;
						document.getElementById('skills').append(div);

						// skillBar contains the 2 divs used to create the skill mastery
						skillBar.style.width = '204px'; // We need to adjust for the 2px border on left and right
						skillBar.style.display = 'inline-block';

						// skillDiv is the filled "gained" skill
						skillDiv.style.width = gainedSkill + 'px';
						skillDiv.style.height = '15px';
						skillDiv.style.border = 'solid';
						skillDiv.style.borderColor = '#C4C4C4';
						skillDiv.style.backgroundColor = '#C4C4C4';
						skillDiv.style.borderWidth = '2px';
						skillDiv.style.borderRightWidth = '0px';
						skillDiv.style.float = 'left';																

							// If mastery is 100% then no other div is needed
							if(lostSkill != 0)
								{
									// skillDiv2 is the empty "lost" skill
									skillDiv2.style.width = lostSkill + 'px';
									skillDiv2.style.height = '15px';
									skillDiv2.style.border = 'solid';
									skillDiv2.borderColor = '#C4C4C4';
									skillDiv2.style.borderWidth = '2px';
									skillDiv2.style.borderLeftWidth = '0px';
									skillDiv2.style.float = 'left';
								}

							// This else is a hack.  due to border sizes if we do not combine the 2 divs, it results in 2px loss in size
							// I hacked it to add 2 more px
							else
								{
									skillDiv.style.width = gainedSkill += 2;
								}

						// Add everything to skills container
						skillBar.append(skillDiv);
						skillBar.append(skillDiv2)
						document.getElementById('skills').append(skillBar);
					}
					
					break;
					
					case 'Information':					
						child = subitem.children;
						text = '<ul>';
						//subchild = child[j].children;
						div = document.createElement('div');
					
						for(j = 0; j < child.length; j++)
						{
							text += '<li>' + child[j].innerHTML + '</li>';
						}
					
						text += '</ul>';
						div.innerHTML = text;
						document.getElementById('other-information').append(div);	
						break;
			}
	}
}