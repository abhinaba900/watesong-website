// Garden Gnome Software - Skin
// Pano2VR 7.1.8/20986
// Filename: PURAVANKARA SKIN 01.ggsk
// Generated 2026-05-06T10:18:09

function pano2vrSkin(player,base) {
	player.addVariable('vis_thumbnails', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_thumbnails_phone', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_prev_next', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_thumbnail_menu', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_map', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_map_close_desktop', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_map_close_mobile', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_thumbnails_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_nodes', 2, false, { ignoreInState: 0  });
	player.addVariable('hide_lottie_index', 1, 0, { ignoreInState: 0  });
	player.addVariable('has_categories', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_phone_1', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_thumbnail_menu_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_thumbnail_menu_phone', 2, false, { ignoreInState: 0  });
	player.addVariable('node_cloner_hasUp', 2, true, { ignoreInState: 0  });
	player.addVariable('node_cloner_hasDown', 2, true, { ignoreInState: 0  });
	player.addVariable('resp_phone_2', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_thumbnails_2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_thumbnails_phone_1', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_phone_3', 2, false, { ignoreInState: 1  });
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		me._variable_resp_phone_1 = {};
		me._variable_resp_phone_1.ggCurrentLogicState = -1;
		me._variable_resp_phone_1.logicBlock = function() {
			var newLogicState_resp_phone_1;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone_1 = 0;
			}
			else {
				newLogicState_resp_phone_1 = -1;
			}
			if (me._variable_resp_phone_1.ggCurrentLogicState != newLogicState_resp_phone_1) {
				me._variable_resp_phone_1.ggCurrentLogicState = newLogicState_resp_phone_1;
				if (me._variable_resp_phone_1.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone_1', true);
				}
				else {
					player.setVariableValue('resp_phone_1', false);
				}
			}
		}
		me._variable_resp_phone_2 = {};
		me._variable_resp_phone_2.ggCurrentLogicState = -1;
		me._variable_resp_phone_2.logicBlock = function() {
			var newLogicState_resp_phone_2;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone_2 = 0;
			}
			else {
				newLogicState_resp_phone_2 = -1;
			}
			if (me._variable_resp_phone_2.ggCurrentLogicState != newLogicState_resp_phone_2) {
				me._variable_resp_phone_2.ggCurrentLogicState = newLogicState_resp_phone_2;
				if (me._variable_resp_phone_2.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone_2', true);
				}
				else {
					player.setVariableValue('resp_phone_2', false);
				}
			}
		}
		me._variable_resp_phone_3 = {};
		me._variable_resp_phone_3.ggCurrentLogicState = -1;
		me._variable_resp_phone_3.logicBlock = function() {
			var newLogicState_resp_phone_3;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone_3 = 0;
			}
			else {
				newLogicState_resp_phone_3 = -1;
			}
			if (me._variable_resp_phone_3.ggCurrentLogicState != newLogicState_resp_phone_3) {
				me._variable_resp_phone_3.ggCurrentLogicState = newLogicState_resp_phone_3;
				if (me._variable_resp_phone_3.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone_3', true);
				}
				else {
					player.setVariableValue('resp_phone_3', false);
				}
			}
		}
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 167px;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 100%';
		me._button_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDI3MS42NSAyNjIuODkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZGF0YS1uYW1lPSJMYXllciAxIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICMxNGQ5Y2M7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8Zz4KICA8cmVjdCByeD0iMjkuNjQiIHJ5PSIyOS42NCIgeT0iNTAuNDUiIGhlaWdodD0iMTYyIiB4PSI1NC44My'+
			'IgY2xhc3M9ImNscy0yIiB3aWR0aD0iMTYyIi8+CiAgPHBhdGggZD0iTTExNi43OSw4NS44MWMxMS45NS0xLjA2LDI1LjA2LjYsMzcuMTQtLjExLDE0LjY5Ljk5LDI2LjM2LDEyLjY2LDI3LjU4LDI3LjI4LTEuNTYsMTQuODMsMy42NCwzNi4xOC0zLjg2LDQ5LjM2LTEyLjQ1LDIxLjg5LTM5LjMzLDEyLjk2LTU5Ljk5LDE0LjgyLTE0Ljc0LTEuMDQtMjYuNi0xMi44MS0yNy41OS0yNy41OS0uNzktMTEuNzcuNjMtMjQuNDEsMC0zNi4yNywxLjAyLTE0LjM3LDEyLjMxLTI2LjIxLDI2LjcyLTI3LjQ4Wk0xMTcuMTIsOTIuMzRjLTEwLjkyLDEuMDctMTkuNzYsMTAuMzctMjAuNTIsMjEuMjgtLjg3LDEy'+
			'LjQyLjM1LDI2LjMxLjQyLDM4Ljc5LDYuNjMsMjYuNDMsMzcuMDEsMTYuMiw1Ni44OSwxOC4yLDExLjE4LTEuMDUsMjAuMDEtOS44OCwyMS4wNi0yMS4wNi0yLTE5Ljg4LDguMjMtNTAuMjYtMTguMi01Ni44OS0xMi41OS4wNy0yNy4yLTEuNTMtMzkuNjYtLjMxWiIgY2xhc3M9ImNscy0xIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBkPSJNMTMwLjM4LDEyMS40OXYtOC4yNWMwLS4wOS43NC0xLjMyLjkyLTEuNDksMS42NC0xLjUzLDQuNTctLjY4LDUuMDIsMS41NS0uMzEsNC45Ny42NSwxMS4wMS4wOCwxNS44NS0uMiwxLjY4LTEuMTcsMi42NS0yLjg1LDIuODUtNC44NC41OC0xMC44OC0uMzktMTUuOD'+
			'UtLjA4LTIuMjMtLjQ1LTMuMDgtMy4zOC0xLjU1LTUuMDIuMTctLjE4LDEuNC0uOTIsMS40OS0uOTJoOC4yNWwtMTIuNzQtMTIuOTNjLTIuMzItMy4xNywxLjE1LTYuNjMsNC4zMS00LjMxbDEyLjkzLDEyLjc0WiIgY2xhc3M9ImNscy0xIi8+CiAgPHBhdGggZD0iTTE0Ni44OSwxMzhsMTIuNzQsMTIuOTNjMi4zMiwzLjE2LTEuMTQsNi42My00LjMxLDQuMzFsLTEyLjkzLTEyLjc0djguMjVjMCwuMDktLjc0LDEuMzItLjkyLDEuNDktMS42NCwxLjUzLTQuNTcuNjgtNS4wMi0xLjU1LjMxLTQuOTctLjY1LTExLjAxLS4wOC0xNS44NS4yLTEuNjgsMS4xNy0yLjY1LDIuODUtMi44NSw0Ljg0LS41OCwx'+
			'MC44OC4zOSwxNS44NS4wOCwyLjIzLjQ1LDMuMDgsMy4zOCwxLjU1LDUuMDItLjE3LjE4LTEuNC45Mi0xLjQ5LjkyaC04LjI1WiIgY2xhc3M9ImNscy0xIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_normalscreen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_normalscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IGZpbGwtb3BhY2l0eT0iMSIgeT0iMzk3IiBoZWlnaHQ9IjI0LjYiIGZpbGw9IiMxNGQ5Y2MiIHg9Ii0yMDkuNiIgd2lkdGg9IjM1LjciLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMTRkOWNjIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQgICAgQy0xMTIuNiwzNjIuNi0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTY3LjksNDIyLjljMCwyLjYtMi4xLDQuNy00LjcsNC43aC0zOC4zYy0yLjYsMC00Ljct'+
			'Mi4xLTQuNy00Ljd2LTI3LjIgICAgYzAtMi42LDIuMS00LjcsNC43LTQuN2gzOC4zYzIuNiwwLDQuNywyLjEsNC43LDQuN0wtMTY3LjksNDIyLjlMLTE2Ny45LDQyMi45eiBNLTEzMi41LDM2OS45bC0xOS41LDE0Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjEgICAgbDAuNywxbDMuNyw1LjJjMC4yLDAuMywwLjIsMC42LDAuMSwxYy0wLjIsMC40LTAuNSwwLjYtMC45LDAuNmwtMTgsMC4xYy0wLjQsMC0wLjctMC4xLTAuOS0wLjRjLTAuMi0wLjMtMC4yLTAuNS0wLjEtMC45ICAgIGw1LjgtMTcuMWMwLjEtMC40LDAuNC0wLjcsMC44LTAuN2MwLjUsMCwwLjcsMC4xLDEsMC40bDMuNiw1LjFsMC43LDAuOW'+
			'MwLjEsMCwwLjEtMC4xLDAuMi0wLjFsMTkuNS0xNGMwLjgtMC41LDEuOC0wLjQsMi40LDAuNCAgICBsMS41LDIuMUMtMTMxLjYsMzY4LjMtMTMxLjgsMzY5LjQtMTMyLjUsMzY5Ljl6Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTEzMi4xLDM2Ny41bC0xLjUtMi4xYy0wLjUtMC44LTEuNi0wLjktMi40LTAuNGwtMTkuNSwxNGMtMC4xLDAtMC4xLDAuMS0wLjIsMC4xbC0wLjctMC45bC0zLjYtNS4xICAgIGMtMC4yLTAuMy0wLjUtMC40LTEtMC40Yy0wLjUsMC0wLjcsMC4zLTAuOCwwLjdsLTUuOCwxNy4xYy0wLjEsMC40'+
			'LTAuMSwwLjcsMC4xLDAuOWMwLjIsMC4zLDAuNSwwLjQsMC45LDAuNGwxOC0wLjEgICAgYzAuNCwwLDAuOC0wLjIsMC45LTAuNmMwLjItMC40LDAuMi0wLjctMC4xLTFsLTMuNy01LjJsLTAuNy0xYzAuMSwwLDAuMS0wLjEsMC4yLTAuMWwxOS41LTE0ICAgIEMtMTMxLjgsMzY5LjQtMTMxLjYsMzY4LjMtMTMyLjEsMzY3LjV6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTcyLjYsMzkxaC0zOC4zYy0yLjYsMC00LjcsMi4xLTQuNyw0Ljd2MjcuMmMwLDIuNiwyLjEsNC43LDQuNyw0LjdoMzguM2MyLjYsMCw0LjctMi4xLDQuNy00Ljd2LTI3LjIgICAgQy0xNjcuOSwzOTMuMS0xNzAsMz'+
			'kxLTE3Mi42LDM5MXogTS0xNzMuOSw0MjEuNmgtMzUuN1YzOTdoMzUuN1Y0MjEuNnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_normalscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_image_normalscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -14px;';
		hs+='cursor : pointer;';
		hs+='height : 77px;';
		hs+='position : absolute;';
		hs+='right : -14px;';
		hs+='visibility : hidden;';
		hs+='width : 77px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 100%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style.transition='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.logicBlock_visible();
		me._button_image_normalscreen.onmouseenter=function (e) {
			me._button_image_normalscreen__img.style.visibility='hidden';
			me._button_image_normalscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['button_image_normalscreen']=true;
		}
		me._button_image_normalscreen.onmouseleave=function (e) {
			me._button_image_normalscreen__img.style.visibility='inherit';
			me._button_image_normalscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['button_image_normalscreen']=false;
		}
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDI3MS42NSAyNjIuODkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZGF0YS1uYW1lPSJMYXllciAxIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICMxNGQ5Y2M7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8cmVjdCByeD0iMjkuNjQiIHJ5PSIyOS42NCIgeT0iNTAuNDUiIGhlaWdodD0iMTYyIiB4PSI1NC44MyIgY2xhc3'+
			'M9ImNscy0yIiB3aWR0aD0iMTYyIi8+CiA8Zz4KICA8cGF0aCBkPSJNMTE2Ljc5LDg1LjgxYzExLjk1LTEuMDYsMjUuMDYuNiwzNy4xNC0uMTEsMTQuNjkuOTksMjYuMzYsMTIuNjYsMjcuNTgsMjcuMjgtMS41NiwxNC44MywzLjY0LDM2LjE4LTMuODYsNDkuMzYtMTIuNDUsMjEuODktMzkuMzMsMTIuOTYtNTkuOTksMTQuODItMTQuNzQtMS4wNC0yNi42LTEyLjgxLTI3LjU5LTI3LjU5LS43OS0xMS43Ny42My0yNC40MSwwLTM2LjI3LDEuMDItMTQuMzcsMTIuMzEtMjYuMjEsMjYuNzItMjcuNDhaTTExNy4xMiw5Mi4zNGMtMTAuOTIsMS4wNy0xOS43NiwxMC4zNy0yMC41MiwyMS4yOC0uODcsMTIu'+
			'NDIuMzUsMjYuMzEuNDIsMzguNzksNi42MywyNi40MywzNy4wMSwxNi4yLDU2Ljg5LDE4LjIsMTEuMTgtMS4wNSwyMC4wMS05Ljg4LDIxLjA2LTIxLjA2LTItMTkuODgsOC4yMy01MC4yNi0xOC4yLTU2Ljg5LTEyLjU5LjA3LTI3LjItMS41My0zOS42Ni0uMzFaIiBjbGFzcz0iY2xzLTEiLz4KICA8cGF0aCBkPSJNMTIxLjEsMTExLjg0bDM0LjI5LDM0LjI5di04Ljk4YzAtLjA5LjgtMS40MywxLTEuNjIsMS43OC0xLjY2LDQuOTctLjc0LDUuNDYsMS42OS0uMzQsNS40MS43MSwxMS45Ny4wOCwxNy4yNC0uMjIsMS44Mi0xLjI3LDIuODgtMy4xLDMuMS01LjI2LjYzLTExLjgzLS40Mi0xNy4yNC0uMD'+
			'gtMi40My0uNDktMy4zNS0zLjY4LTEuNjktNS40Ni4xOC0uMTksMS41Mi0xLDEuNjItMWg4Ljk4bC0zNC4yOS0zNC4yOXY4Ljk4YzAsLjA5LS44LDEuNDMtMSwxLjYyLTEuNzgsMS42Ni00Ljk3Ljc0LTUuNDYtMS42OS4zNC01LjQxLS43MS0xMS45Ny0uMDgtMTcuMjQuMjItMS44MiwxLjI3LTIuODgsMy4xLTMuMSw1LjI2LS42MywxMS44My40MiwxNy4yNC4wOCwyLjQzLjQ5LDMuMzUsMy42OCwxLjY5LDUuNDYtLjE4LjE5LTEuNTIsMS0xLjYyLDFoLTguOThaIiBjbGFzcz0iY2xzLTEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDI3MS42NSAyNjIuODkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZGF0YS1uYW1lPSJMYXllciAxIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICMxNGQ5Y2M7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8Zz4KICA8cmVjdCByeD0iMjkuNjQiIHJ5PSIyOS42NCIgeT0iNTAuNDUiIGhlaWdodD0iMTYyIiB4PSI1NC44My'+
			'IgY2xhc3M9ImNscy0yIiB3aWR0aD0iMTYyIi8+CiAgPHBhdGggZD0iTTExNi43OSw4NS44MWMxMS45NS0xLjA2LDI1LjA2LjYsMzcuMTQtLjExLDE0LjY5Ljk5LDI2LjM2LDEyLjY2LDI3LjU4LDI3LjI4LTEuNTYsMTQuODMsMy42NCwzNi4xOC0zLjg2LDQ5LjM2LTEyLjQ1LDIxLjg5LTM5LjMzLDEyLjk2LTU5Ljk5LDE0LjgyLTE0Ljc0LTEuMDQtMjYuNi0xMi44MS0yNy41OS0yNy41OS0uNzktMTEuNzcuNjMtMjQuNDEsMC0zNi4yNywxLjAyLTE0LjM3LDEyLjMxLTI2LjIxLDI2LjcyLTI3LjQ4Wk0xMTcuMTIsOTIuMzRjLTEwLjkyLDEuMDctMTkuNzYsMTAuMzctMjAuNTIsMjEuMjgtLjg3LDEy'+
			'LjQyLjM1LDI2LjMxLjQyLDM4Ljc5LDYuNjMsMjYuNDMsMzcuMDEsMTYuMiw1Ni44OSwxOC4yLDExLjE4LTEuMDUsMjAuMDEtOS44OCwyMS4wNi0yMS4wNi0yLTE5Ljg4LDguMjMtNTAuMjYtMTguMi01Ni44OS0xMi41OS4wNy0yNy4yLTEuNTMtMzkuNjYtLjMxWiIgY2xhc3M9ImNscy0xIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBkPSJNMTMwLjM4LDEyMS40OXYtOC4yNWMwLS4wOS43NC0xLjMyLjkyLTEuNDksMS42NC0xLjUzLDQuNTctLjY4LDUuMDIsMS41NS0uMzEsNC45Ny42NSwxMS4wMS4wOCwxNS44NS0uMiwxLjY4LTEuMTcsMi42NS0yLjg1LDIuODUtNC44NC41OC0xMC44OC0uMzktMTUuOD'+
			'UtLjA4LTIuMjMtLjQ1LTMuMDgtMy4zOC0xLjU1LTUuMDIuMTctLjE4LDEuNC0uOTIsMS40OS0uOTJoOC4yNWwtMTIuNzQtMTIuOTNjLTIuMzItMy4xNywxLjE1LTYuNjMsNC4zMS00LjMxbDEyLjkzLDEyLjc0WiIgY2xhc3M9ImNscy0xIi8+CiAgPHBhdGggZD0iTTE0Ni44OSwxMzhsMTIuNzQsMTIuOTNjMi4zMiwzLjE2LTEuMTQsNi42My00LjMxLDQuMzFsLTEyLjkzLTEyLjc0djguMjVjMCwuMDktLjc0LDEuMzItLjkyLDEuNDktMS42NCwxLjUzLTQuNTcuNjgtNS4wMi0xLjU1LjMxLTQuOTctLjY1LTExLjAxLS4wOC0xNS44NS4yLTEuNjgsMS4xNy0yLjY1LDIuODUtMi44NSw0Ljg0LS41OCwx'+
			'MC44OC4zOSwxNS44NS4wOCwyLjIzLjQ1LDMuMDgsMy4zOCwxLjU1LDUuMDItLjE3LjE4LTEuNC45Mi0xLjQ5LjkyaC04LjI1WiIgY2xhc3M9ImNscy0xIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_image_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -13px;';
		hs+='cursor : pointer;';
		hs+='height : 77px;';
		hs+='position : absolute;';
		hs+='right : -14px;';
		hs+='visibility : inherit;';
		hs+='width : 77px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 100%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style.transition='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.logicBlock_visible();
		me._button_image_fullscreen.onmouseenter=function (e) {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['button_image_fullscreen']=true;
		}
		me._button_image_fullscreen.onmouseleave=function (e) {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['button_image_fullscreen']=false;
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_fullscreen);
		me.divSkin.appendChild(me._button_fullscreen);
		el=me._button_mute=document.createElement('div');
		el.ggId="button_mute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 236px;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 19px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_mute.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_mute.ggUpdatePosition=function (useTransition) {
		}
		el=me._unmute=document.createElement('div');
		els=me._unmute__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDI3MS42NSAyNjIuODkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZGF0YS1uYW1lPSJMYXllciAxIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiBub25lOwogICAgICAgIHN0cm9rZTogI2ZmZjsKICAgICAgICBzdHJva2Utd2lkdGg6IDRweDsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIgewogICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDsKICAgICAgfQoKICAgICAgLmNscy0zIHsKICAgICAgIC'+
			'BmaWxsOiAjMTRkOWNjOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgICAgc3Ryb2tlOiAjMTRkOWNjOwogICAgICAgIHN0cm9rZS13aWR0aDogM3B4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGc+CiAgPHJlY3Qgcng9IjI5LjY0IiByeT0iMjkuNjQiIHk9IjUwLjQ1IiBoZWlnaHQ9IjE2MiIgeD0iNTQuODMiIGNsYXNzPSJjbHMtMyIgd2lkdGg9IjE2MiIvPgogIDxwYXRoIGQ9Ik0xNjYuMTQsMTI5LjF2LTI3LjhoLTQ0LjE2djUxLjUyYzAsMS4xNy0xLjE2LDQuNjMtMS42OCw1Ljg0LTYuMjEsMTQuMzItMjYuMDUsMTYuNi0zNS4yMiwz'+
			'LjkyLTEzLjE3LTE4LjE5LDguMDMtNDAuOTYsMjcuMDktMjkuNTV2LTM3LjQ1YzAtMS45LDMuNC00LjQzLDUuMzktNC4xLDE5LjI3LS41MywzMy4yNy0uNTMsNTMuMDEsMCwzLjE2LjA4LDUuMTEsMS44MSw1LjQsNS4wNy0uODksMTYuNzksMS4xNCwzNC43MiwwLDUxLjM4LTEuMywxOS4wNS0yNS4yMSwyNi4zMS0zNi45MiwxMS4wNS03Ljg4LTEwLjI3LTMuNTUtMjUuOSw4LjIzLTMwLjkxLDYuMjctMi42NywxMi44Ny0xLjk0LDE4Ljg3LDEuMDRaTTE1My4zLDEzNi4zN2MtMTIuMDMsMS44Ny0xMC42NSwyMS42MywyLjUyLDIxLjE5LDE0LjUyLS40OCwxMy4yOS0yMy42NS0yLjUyLTIxLjE5Wk0xMD'+
			'kuMTIsMTQyLjk1Yy0xMC4yNy0xMC4yNy0yNS43Nyw2LjIzLTE0LjI4LDE1Ljc1LDEwLjM1LDguNTcsMjMuNTktNi40NSwxNC4yOC0xNS43NVoiIGNsYXNzPSJjbHMtMiIvPgogPC9nPgogPGxpbmUgeTE9Ijg1IiB5Mj0iMTcxIiB4MT0iODguMDQiIHgyPSIxOTAuMDQiIGNsYXNzPSJjbHMtMSIvPgo8L3N2Zz4K';
		me._unmute__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._unmute__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNCAgIFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE3Miw0MjUuOGMwLDEuNy0xLjEsMi4zLTIuNiwxLjNsLTI4LjEtMTkuNmgtMTZjLTAuOSwwLTEuNy0wLjgtMS43LTEuN3YtMTcuNmMwLTAuOSwwLjgtMS43LDEuNy0xLjcgICBoMTZsMjguMS0xOS42YzEuNC0xLDIuNi0wLjQsMi42LDEuM0MtMTcyLDM2OC4yLTE3Miw0MjUuOC0xNzIsNDI1Ljh6'+
			'IE0tMTUyLjcsMzk3YzAsNS4yLTEuOCwxMC40LTUuMywxNC41Yy0wLjcsMC42LTEuOCwwLjYtMi40LDAgICBsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNiwwLTIuNGMyLjQtMywzLjYtNi42LDMuNi0xMC4zaDBjMC0zLjYtMS4yLTcuMy0zLjYtMTAuM2MtMC43LTAuOC0wLjctMS43LDAtMi40bDEuOC0xLjggICBjMC42LTAuNiwxLjgtMC42LDIuNCwwQy0xNTQuNSwzODYuNi0xNTIuNywzOTEuOC0xNTIuNywzOTdMLTE1Mi43LDM5N3ogTS0xMzcuMSwzOTdjMCw5LjItMy4zLDE4LjQtOS45LDI1LjYgICBjLTAuNywwLjYtMS43LDAuNi0yLjQsMGwtMS44LTEuOGMtMC43LTAuNy0wLjctMS43LDAtMi'+
			'40YzUuNC02LDguMi0xMy43LDguMi0yMS4zaDBjMC03LjYtMi43LTE1LjMtOC4yLTIxLjMgICBjLTAuNy0wLjctMC43LTEuNywwLTIuNGwxLjgtMS44YzAuNy0wLjcsMS43LTAuNywyLjQsMEMtMTQwLjUsMzc4LjYtMTM3LjEsMzg3LjgtMTM3LjEsMzk3TC0xMzcuMSwzOTd6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzQuNSwzNjYuOWwtMjguMSwxOS42aC0xNmMtMC45LDAtMS43LDAuOC0xLjcsMS43djE3LjZjMCwwLjksMC44LDEuNywxLjcsMS43aDE2bDI4LjEsMTkuNiAgIGMxLjQsMSwyLjYsMC40LDIuNi0xLjN2LTU3LjVDLTE3Miwz'+
			'NjYuNS0xNzMuMSwzNjUuOS0xNzQuNSwzNjYuOXoiLz4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDcuMSwzNzEuNGMtMC43LTAuNi0xLjctMC42LTIuNCwwbC0xLjgsMS44Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRjNS40LDYsOC4yLDEzLjcsOC4yLDIxLjNoMCAgICBjMCw3LjYtMi43LDE1LjMtOC4yLDIxLjNjLTAuNywwLjctMC43LDEuNywwLDIuNGwxLjgsMS44YzAuNywwLjcsMS43LDAuNywyLjQsMGM2LjYtNy4yLDkuOS0xNi40LDkuOS0yNS42aDAgICAgQy0xMzcuMSwzODcuOC0xNDAuNSwzNzguNi0xNDcuMSwzNzEuNHoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRi'+
			'IgZD0iTS0xNjAuNSwzODIuNWwtMS44LDEuOGMtMC43LDAuNy0wLjcsMS42LDAsMi40YzIuNCwzLDMuNiw2LjYsMy42LDEwLjNoMGMwLDMuNi0xLjIsNy4zLTMuNiwxMC4zICAgIGMtMC43LDAuOC0wLjcsMS43LDAsMi40bDEuOCwxLjhjMC42LDAuNiwxLjgsMC42LDIuNCwwYzMuNi00LjIsNS4zLTkuMyw1LjMtMTQuNWgwYzAtNS4yLTEuOC0xMC40LTUuMy0xNC41ICAgIEMtMTU4LjcsMzgxLjktMTU5LjksMzgxLjktMTYwLjUsMzgyLjV6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._unmute__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="unmute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -14px;';
		hs+='cursor : pointer;';
		hs+='height : 77px;';
		hs+='position : absolute;';
		hs+='right : -14px;';
		hs+='visibility : hidden;';
		hs+='width : 77px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._unmute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._unmute.onclick=function (e) {
			player.unmute("_all");
			me._unmute.style.transition='none';
			me._unmute.style.visibility='hidden';
			me._unmute.ggVisible=false;
			me._mute.style.transition='none';
			me._mute.style.visibility=(Number(me._mute.style.opacity)>0||!me._mute.style.opacity)?'inherit':'hidden';
			me._mute.ggVisible=true;
		}
		me._unmute.onmouseenter=function (e) {
			me._unmute__img.style.visibility='hidden';
			me._unmute__imgo.style.visibility='inherit';
			me.elementMouseOver['unmute']=true;
		}
		me._unmute.onmouseleave=function (e) {
			me._unmute__img.style.visibility='inherit';
			me._unmute__imgo.style.visibility='hidden';
			me.elementMouseOver['unmute']=false;
		}
		me._unmute.ggUpdatePosition=function (useTransition) {
		}
		me._button_mute.appendChild(me._unmute);
		el=me._mute=document.createElement('div');
		els=me._mute__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDI3MS42NSAyNjIuODkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZGF0YS1uYW1lPSJMYXllciAxIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMTRkOWNjOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgICAgc3Ryb2tlOiAjMTRkOWNjOwogICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDsKICAgICAgICBzdHJva2Utd2lkdGg6IDNweDsKICAgICAgfQogICAgPC'+
			'9zdHlsZT4KIDwvZGVmcz4KIDxyZWN0IHJ4PSIyOS42NCIgcnk9IjI5LjY0IiB5PSI1MC40NSIgaGVpZ2h0PSIxNjIiIHg9IjU0LjgzIiBjbGFzcz0iY2xzLTEiIHdpZHRoPSIxNjIiLz4KIDxwYXRoIGQ9Ik0xNjYuMTQsMTI5LjF2LTI3LjhoLTQ0LjE2djUxLjUyYzAsMS4xNy0xLjE2LDQuNjMtMS42OCw1Ljg0LTYuMjEsMTQuMzItMjYuMDUsMTYuNi0zNS4yMiwzLjkyLTEzLjE3LTE4LjE5LDguMDMtNDAuOTYsMjcuMDktMjkuNTV2LTM3LjQ1YzAtMS45LDMuNC00LjQzLDUuMzktNC4xLDE5LjI3LS41MywzMy4yNy0uNTMsNTMuMDEsMCwzLjE2LjA4LDUuMTEsMS44MSw1LjQsNS4wNy0uODksMTYu'+
			'NzksMS4xNCwzNC43MiwwLDUxLjM4LTEuMywxOS4wNS0yNS4yMSwyNi4zMS0zNi45MiwxMS4wNS03Ljg4LTEwLjI3LTMuNTUtMjUuOSw4LjIzLTMwLjkxLDYuMjctMi42NywxMi44Ny0xLjk0LDE4Ljg3LDEuMDRaTTE1My4zLDEzNi4zN2MtMTIuMDMsMS44Ny0xMC42NSwyMS42MywyLjUyLDIxLjE5LDE0LjUyLS40OCwxMy4yOS0yMy42NS0yLjUyLTIxLjE5Wk0xMDkuMTIsMTQyLjk1Yy0xMC4yNy0xMC4yNy0yNS43Nyw2LjIzLTE0LjI4LDE1Ljc1LDEwLjM1LDguNTcsMjMuNTktNi40NSwxNC4yOC0xNS43NVoiIGNsYXNzPSJjbHMtMiIvPgo8L3N2Zz4K';
		me._mute__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._mute__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDI3MS42NSAyNjIuODkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZGF0YS1uYW1lPSJMYXllciAxIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiBub25lOwogICAgICAgIHN0cm9rZTogI2ZmZjsKICAgICAgICBzdHJva2Utd2lkdGg6IDRweDsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIgewogICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDsKICAgICAgfQoKICAgICAgLmNscy0zIHsKICAgICAgIC'+
			'BmaWxsOiAjMTRkOWNjOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgICAgc3Ryb2tlOiAjMTRkOWNjOwogICAgICAgIHN0cm9rZS13aWR0aDogM3B4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGc+CiAgPHJlY3Qgcng9IjI5LjY0IiByeT0iMjkuNjQiIHk9IjUwLjQ1IiBoZWlnaHQ9IjE2MiIgeD0iNTQuODMiIGNsYXNzPSJjbHMtMyIgd2lkdGg9IjE2MiIvPgogIDxwYXRoIGQ9Ik0xNjYuMTQsMTI5LjF2LTI3LjhoLTQ0LjE2djUxLjUyYzAsMS4xNy0xLjE2LDQuNjMtMS42OCw1Ljg0LTYuMjEsMTQuMzItMjYuMDUsMTYuNi0zNS4yMiwz'+
			'LjkyLTEzLjE3LTE4LjE5LDguMDMtNDAuOTYsMjcuMDktMjkuNTV2LTM3LjQ1YzAtMS45LDMuNC00LjQzLDUuMzktNC4xLDE5LjI3LS41MywzMy4yNy0uNTMsNTMuMDEsMCwzLjE2LjA4LDUuMTEsMS44MSw1LjQsNS4wNy0uODksMTYuNzksMS4xNCwzNC43MiwwLDUxLjM4LTEuMywxOS4wNS0yNS4yMSwyNi4zMS0zNi45MiwxMS4wNS03Ljg4LTEwLjI3LTMuNTUtMjUuOSw4LjIzLTMwLjkxLDYuMjctMi42NywxMi44Ny0xLjk0LDE4Ljg3LDEuMDRaTTE1My4zLDEzNi4zN2MtMTIuMDMsMS44Ny0xMC42NSwyMS42MywyLjUyLDIxLjE5LDE0LjUyLS40OCwxMy4yOS0yMy42NS0yLjUyLTIxLjE5Wk0xMD'+
			'kuMTIsMTQyLjk1Yy0xMC4yNy0xMC4yNy0yNS43Nyw2LjIzLTE0LjI4LDE1Ljc1LDEwLjM1LDguNTcsMjMuNTktNi40NSwxNC4yOC0xNS43NVoiIGNsYXNzPSJjbHMtMiIvPgogPC9nPgogPGxpbmUgeTE9Ijg1IiB5Mj0iMTcxIiB4MT0iODguMDQiIHgyPSIxOTAuMDQiIGNsYXNzPSJjbHMtMSIvPgo8L3N2Zz4K';
		me._mute__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="mute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -13px;';
		hs+='cursor : pointer;';
		hs+='height : 75px;';
		hs+='position : absolute;';
		hs+='right : -13px;';
		hs+='visibility : inherit;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mute.onclick=function (e) {
			player.mute("_all");
			me._mute.style.transition='none';
			me._mute.style.visibility='hidden';
			me._mute.ggVisible=false;
			me._unmute.style.transition='none';
			me._unmute.style.visibility=(Number(me._unmute.style.opacity)>0||!me._unmute.style.opacity)?'inherit':'hidden';
			me._unmute.ggVisible=true;
		}
		me._mute.onmouseenter=function (e) {
			me._mute__img.style.visibility='hidden';
			me._mute__imgo.style.visibility='inherit';
			me.elementMouseOver['mute']=true;
		}
		me._mute.onmouseleave=function (e) {
			me._mute__img.style.visibility='inherit';
			me._mute__imgo.style.visibility='hidden';
			me.elementMouseOver['mute']=false;
		}
		me._mute.ggUpdatePosition=function (useTransition) {
		}
		me._button_mute.appendChild(me._mute);
		me.divSkin.appendChild(me._button_mute);
		el=me._button_auto_rotate=document.createElement('div');
		el.ggId="button_auto_rotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 308px;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_auto_rotate.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_auto_rotate.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._button_auto_rotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._stop_rotate_image=document.createElement('div');
		els=me._stop_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDI3MS42NSAyNjIuODkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZGF0YS1uYW1lPSJMYXllciAxIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICAgIHN0cm9rZTogIzE0ZDljYzsKICAgICAgICBzdHJva2Utd2lkdGg6IC41cHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMSwgLmNscy0yIHsKICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgIC'+
			'AgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNmZmY7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiA0cHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMyB7CiAgICAgICAgZmlsbDogIzE0ZDljYzsKICAgICAgfQogICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxyZWN0IHJ4PSIyOS42NCIgcnk9IjI5LjY0IiB5PSI1MC40NSIgaGVpZ2h0PSIxNjIiIHg9IjU0LjgzIiBjbGFzcz0iY2xzLTMiIHdpZHRoPSIxNjIiLz4KIDxnPgogIDxwYXRoIGQ9Ik0xNTYuOSwxNDUuMDJjNy40LTEuMiwxOC44NC0zLjc2LDI0LjQtOS4wMSw2LjcyLTYuMzUtMi41OC0xMS44Ni04LjEyLTEzLjcyLS4xMS42NS41LDEuMDIu'+
			'NjEsMS42LjU5LDIuOTEtMi41Myw0LjkyLTUuMDEsMy4zMS0xLjk3LTEuMjgtNS4xMS03Ljk2LTcuMDQtOS45NC0uNDgtMS4yMy0uMjUtMi45MS44LTMuNzQsMi45NC0uOTMsMTAuMDYtNC40OSwxMi44Mi00LjExczMuMzYsMy44OCwxLjA1LDUuNzdjLS4zLjI1LTEuODMuMzQtMS4xOSwxLC4xNy4xNywzLjU3LDEuMzksNC40MiwxLjg2LDEyLjY2LDcuMDEsMTQuNzcsMTcuOTksMS40NSwyNS45LTcuMzUsNC4zNi0xNi40Miw2LjI4LTI0Ljc0LDcuODMtMS4wNCwzLjU1LTEuNTUsNy4zOC0yLjU0LDExLjA0LTIuMDksNy43Ny03LjIzLDIxLjYyLTE2LjUyLDIyLjg0LTguNzIsMS4xNC0xNC41OS04Lj'+
			'g1LTE3LjA1LTE1Ljg2LS42OS4yOC0uNjYsMS40Mi0xLjIsMi4wMi0yLjEzLDIuMzMtNS45NS40LTUuNTEtMi43OC4xNy0xLjIyLDMuMDUtOC45NSwzLjcxLTEwLjIzLjk2LTEuODcsMi4yMi0yLjcsNC4zOS0yLjEsMi40OSwyLjMzLDcuNjgsNC43Myw5LjY2LDcuMzEsMi40MSwzLjE0LTEuMzYsNi42OC00LjQyLDQuNDItLjE0LDEuMTUuODUsMi44MywxLjQ3LDMuOTYsMS45MiwzLjQ4LDUuNzEsOS4wMywxMC4yMSw2LjAzLDYuNS00LjM1LDkuNjktMTguNiwxMC44OC0yNS45My0xNS41MiwxLjQ1LTMyLjM1Ljg2LTQ3LjM0LTMuNzMtOC44OC0yLjcyLTI1LjI1LTEwLjEtMTkuMzUtMjIuMDcsNC43'+
			'Ni05LjY3LDIyLjg2LTE0LjA3LDMyLjcxLTE1LjMsMS4wNC00LjkzLDEuODktOS45MSwzLjQzLTE0LjcyLDguNS0yNi41OSwyNS45OC0yNS42MiwzNC4xMS41Miw0LjcsMTUuMTIsNS4zNCwzMi4xNiwzLjksNDcuODRaTTE1MC40MiwxNDYuMDFjMS4zOS0xNS45MSwxLjE5LTMzLjY5LTQuMTQtNDguOS0xLjU4LTQuNTEtNi45NC0xNy4xNS0xMy4zLTEyLjQ4LTYuNTEsNC43OS05LjQsMTguMTktMTAuNjksMjUuNzgsMi41Ny0uMTIsNS40Mi0uNiw3Ljk2LS42OSwyLjg2LS4xLDguMjMtLjM3LDEwLjg1LjA0LDQsLjYyLDMuNzMsNS44Ny4zNCw2LjQxcy04LjUyLS4xNS0xMi4yMSwwYy0yLjU2LjExLT'+
			'UuMzcuNjEtNy45Ni43LS4xMywyLjQ2LS41OSw1LjE4LS43LDcuNjItLjE5LDQuNTIuNTEsOS45My4wMiwxNC4yNy0uNDUsNC4wMi01LjY5LDQuMDEtNi4zNy0uMDktLjU0LTMuMjItLjIzLTEwLS4xLTEzLjUxLjA5LTIuMy41My00Ljk1LjY5LTcuMjgtOC44Ni45LTM5LjYxLDkuNjUtMjAuNTksMjAuNzUsNC42NCwyLjcxLDEwLjU0LDQuNDUsMTUuNzcsNS42LDEzLjE1LDIuOSwyNy4wNSwzLjA5LDQwLjQxLDEuNzdaIiBjbGFzcz0iY2xzLTEiLz4KICA8bGluZSB5MT0iODkuOTgiIHkyPSIxNzguOTEiIHgxPSI4OC40NSIgeDI9IjE4Ny45IiBjbGFzcz0iY2xzLTIiLz4KIDwvZz4KPC9zdmc+Cg=='+
			'';
		me._stop_rotate_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._stop_rotate_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiAgICBNLTE5OC41LDM2Ny41YzYuNC01LjEsMTQuNi04LjIsMjMuNS04LjJjOC42LDAsMTYuNSwyLjksMjIuOSw3LjhsLTcuMiw3LjJjLTQuNS0zLjEtOS45LTQuOS0xNS43LTQuOWMtNi40LDAtMTIuMywyLjItMTcsNS45ICAgYy0wLjcsMC41LTEuNiwwLjQtMi4yLTAuMmMtMC42LTAuNi0zLjUtMy44LTQuNC00LjlDLTE5OS4zLDM2OS4yLTE5OS4z'+
			'LDM2OC4xLTE5OC41LDM2Ny41eiBNLTIyMS45LDM5N2MtMC41LDAtMC45LTAuMi0xLjItMC43ICAgYy0wLjMtMC41LTAuMi0xLjEsMC4xLTEuNWwxNC4xLTE5LjhjMC4zLTAuNCwwLjYtMC42LDEuMi0wLjZjMC40LDAsMC43LDAuMiwxLjEsMC42bDE0LjIsMTkuOGMwLjMsMC40LDAuNCwxLDAuMSwxLjUgICBjLTAuMywwLjUtMC42LDAuNy0xLjIsMC43aC04LjVoLTAuN2MwLjEsNS44LDEuOSwxMS4yLDUsMTUuNmwtNy4xLDcuMWMtNC45LTYuMy03LjgtMTQuMi03LjktMjIuOGgtMC42SC0yMjEuOXogTS0yMTAuNyw0MzYuMyAgIGMtMC40LDAtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC'+
			'43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zYzAuMy0wLjMsMC44LTAuNSwxLjItMC41czAuOSwwLjIsMS4yLDAuNWwxLjgsMS44ICAgYzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zQy0yMDkuOSw0MzYuMS0yMTAuMyw0MzYuMy0yMTAuNyw0MzYuM3ogTS0xNTEuNSw0MjYuM2MtNi40LDUuMS0xNC42LDguMi0yMy41LDguMiAgIGMtOC41LDAtMTYuNC0yLjktMjIuOC03LjdsNy4yLTcuMmM0LjQsMyw5LjgsNC44LDE1LjYsNC44YzYuNCwwLDEyLjMtMi4yLDE3LTUuOWMwLjctMC41LDEuNi0wLjQsMi4yLDAuMmMwLjYsMC42LDMuNSwzLjgsNC40LDQuOSAgIEMtMTUwLjcsNDI0LjUtMTUw'+
			'LjcsNDI1LjctMTUxLjUsNDI2LjN6IE0tMTQxLjEsNDE5LjFjLTAuMywwLjQtMC42LDAuNi0xLjIsMC42Yy0wLjQsMC0wLjctMC4yLTEuMS0wLjZsLTE0LjItMTkuOCAgIGMtMC4zLTAuNC0wLjQtMS0wLjEtMS41YzAuMy0wLjUsMC42LTAuNywxLjItMC43aDguNGgwLjdjMC01LjgtMS44LTExLjMtNC45LTE1LjdsNy4yLTcuMmM0LjksNi40LDcuOCwxNC4zLDcuOCwyMi45aDAuNmg4LjYgICBjMC41LDAsMC45LDAuMiwxLjIsMC43YzAuMywwLjUsMC4yLDEuMS0wLjEsMS41TC0xNDEuMSw0MTkuMXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLT'+
			'EzOS4zLDM1Ny43YzAuNCwwLDAuOSwwLjIsMS4yLDAuNWwxLjgsMS44YzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zYy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNSAgIHMtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zQy0xNDAuMSwzNTcuOS0xMzkuNywzNTcuNy0xMzkuMywzNTcuNyIvPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5NC4yLDM3NC45YzAuNiwwLjYsMS41LDAuNywyLjIsMC4yYzQuNy0zLjcsMTAuNi01LjksMTctNS45YzUuOCwwLDExLjMsMS44LDE1LjcsNC45bDcuMi03LjIgICAgYy02LjQt'+
			'NC45LTE0LjMtNy44LTIyLjktNy44Yy04LjksMC0xNywzLjEtMjMuNSw4LjJjLTAuOCwwLjYtMC44LDEuOC0wLjIsMi42Qy0xOTcuNywzNzEuMS0xOTQuOCwzNzQuNC0xOTQuMiwzNzQuOXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMjYuOSwzOTcuN2MtMC4zLTAuNS0wLjYtMC43LTEuMi0wLjdoLTguNmgtMC42YzAtOC42LTIuOS0xNi41LTcuOC0yMi45bC03LjIsNy4yICAgIGMzLjEsNC41LDQuOSw5LjksNC45LDE1LjdoLTAuN2gtOC40Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjdjLTAuMywwLjUtMC4yLDEuMSwwLjEsMS41bDE0LjIsMTkuOGMwLjMsMC40LDAuNiwwLjYsMS4xLD'+
			'AuNiAgICBjMC41LDAsMC45LTAuMiwxLjItMC42bDE0LjEtMTkuOEMtMTI2LjcsMzk4LjgtMTI2LjYsMzk4LjMtMTI2LjksMzk3Ljd6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTIxMi43LDM5N2MwLjEsOC42LDMsMTYuNSw3LjksMjIuOGw3LjEtNy4xYy0zLjEtNC40LTUtOS44LTUtMTUuNmgwLjdoOC41YzAuNSwwLDAuOS0wLjIsMS4yLTAuNyAgICBjMC4zLTAuNSwwLjItMS4xLTAuMS0xLjVsLTE0LjItMTkuOGMtMC4zLTAuNC0wLjYtMC42LTEuMS0wLjZjLTAuNSwwLTAuOSwwLjItMS4yLDAuNmwtMTQuMSwxOS44Yy0wLjMsMC40LTAuNCwxLTAuMSwxLjUg'+
			'ICAgYzAuMywwLjUsMC42LDAuNywxLjIsMC43aDguNkgtMjEyLjd6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTU1LjgsNDE4LjhjLTAuNi0wLjYtMS41LTAuNy0yLjItMC4yYy00LjcsMy43LTEwLjYsNS45LTE3LDUuOWMtNS44LDAtMTEuMS0xLjgtMTUuNi00LjhsLTcuMiw3LjIgICAgYzYuMyw0LjgsMTQuMiw3LjcsMjIuOCw3LjdjOC45LDAsMTctMy4xLDIzLjUtOC4yYzAuOC0wLjYsMC44LTEuOCwwLjItMi42Qy0xNTIuMyw0MjIuNi0xNTUuMiw0MTkuNC0xNTUuOCw0MTguOHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._stop_rotate_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="stop_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -14px;';
		hs+='cursor : pointer;';
		hs+='height : 77px;';
		hs+='position : absolute;';
		hs+='right : -13px;';
		hs+='visibility : hidden;';
		hs+='width : 77px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._stop_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stop_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._stop_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._stop_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._stop_rotate_image.style.transition='';
				if (me._stop_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._stop_rotate_image.style.visibility=(Number(me._stop_rotate_image.style.opacity)>0||!me._stop_rotate_image.style.opacity)?'inherit':'hidden';
					me._stop_rotate_image.ggVisible=true;
				}
				else {
					me._stop_rotate_image.style.visibility="hidden";
					me._stop_rotate_image.ggVisible=false;
				}
			}
		}
		me._stop_rotate_image.logicBlock_visible();
		me._stop_rotate_image.onmouseenter=function (e) {
			me._stop_rotate_image__img.style.visibility='hidden';
			me._stop_rotate_image__imgo.style.visibility='inherit';
			me.elementMouseOver['stop_rotate_image']=true;
		}
		me._stop_rotate_image.onmouseleave=function (e) {
			me._stop_rotate_image__img.style.visibility='inherit';
			me._stop_rotate_image__imgo.style.visibility='hidden';
			me.elementMouseOver['stop_rotate_image']=false;
		}
		me._stop_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._stop_rotate_image);
		el=me._start_rotate_image=document.createElement('div');
		els=me._start_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDI3MS42NSAyNjIuODkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZGF0YS1uYW1lPSJMYXllciAxIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICAgIHN0cm9rZTogIzE0ZDljYzsKICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAuNXB4OwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICMxNGQ5Y2M7CiAgICAgIH0KICAgID'+
			'wvc3R5bGU+CiA8L2RlZnM+CiA8cmVjdCByeD0iMjkuNjQiIHJ5PSIyOS42NCIgeT0iNTAuNDUiIGhlaWdodD0iMTYyIiB4PSI1NC44MyIgY2xhc3M9ImNscy0yIiB3aWR0aD0iMTYyIi8+CiA8cGF0aCBkPSJNMTU2LjksMTQ1LjAyYzcuNC0xLjIsMTguODQtMy43NiwyNC40LTkuMDEsNi43Mi02LjM1LTIuNTgtMTEuODYtOC4xMi0xMy43Mi0uMTEuNjUuNSwxLjAyLjYxLDEuNi41OSwyLjkxLTIuNTMsNC45Mi01LjAxLDMuMzEtMS45Ny0xLjI4LTUuMTEtNy45Ni03LjA0LTkuOTQtLjQ4LTEuMjMtLjI1LTIuOTEuOC0zLjc0LDIuOTQtLjkzLDEwLjA2LTQuNDksMTIuODItNC4xMXMzLjM2LDMuODgs'+
			'MS4wNSw1Ljc3Yy0uMy4yNS0xLjgzLjM0LTEuMTksMSwuMTcuMTcsMy41NywxLjM5LDQuNDIsMS44NiwxMi42Niw3LjAxLDE0Ljc3LDE3Ljk5LDEuNDUsMjUuOS03LjM1LDQuMzYtMTYuNDIsNi4yOC0yNC43NCw3LjgzLTEuMDQsMy41NS0xLjU1LDcuMzgtMi41NCwxMS4wNC0yLjA5LDcuNzctNy4yMywyMS42Mi0xNi41MiwyMi44NC04LjcyLDEuMTQtMTQuNTktOC44NS0xNy4wNS0xNS44Ni0uNjkuMjgtLjY2LDEuNDItMS4yLDIuMDItMi4xMywyLjMzLTUuOTUuNC01LjUxLTIuNzguMTctMS4yMiwzLjA1LTguOTUsMy43MS0xMC4yMy45Ni0xLjg3LDIuMjItMi43LDQuMzktMi4xLDIuNDksMi4zMy'+
			'w3LjY4LDQuNzMsOS42Niw3LjMxLDIuNDEsMy4xNC0xLjM2LDYuNjgtNC40Miw0LjQyLS4xNCwxLjE1Ljg1LDIuODMsMS40NywzLjk2LDEuOTIsMy40OCw1LjcxLDkuMDMsMTAuMjEsNi4wMyw2LjUtNC4zNSw5LjY5LTE4LjYsMTAuODgtMjUuOTMtMTUuNTIsMS40NS0zMi4zNS44Ni00Ny4zNC0zLjczLTguODgtMi43Mi0yNS4yNS0xMC4xLTE5LjM1LTIyLjA3LDQuNzYtOS42NywyMi44Ni0xNC4wNywzMi43MS0xNS4zLDEuMDQtNC45MywxLjg5LTkuOTEsMy40My0xNC43Miw4LjUtMjYuNTksMjUuOTgtMjUuNjIsMzQuMTEuNTIsNC43LDE1LjEyLDUuMzQsMzIuMTYsMy45LDQ3Ljg0Wk0xNTAuNDIs'+
			'MTQ2LjAxYzEuMzktMTUuOTEsMS4xOS0zMy42OS00LjE0LTQ4LjktMS41OC00LjUxLTYuOTQtMTcuMTUtMTMuMy0xMi40OC02LjUxLDQuNzktOS40LDE4LjE5LTEwLjY5LDI1Ljc4LDIuNTctLjEyLDUuNDItLjYsNy45Ni0uNjksMi44Ni0uMSw4LjIzLS4zNywxMC44NS4wNCw0LC42MiwzLjczLDUuODcuMzQsNi40MXMtOC41Mi0uMTUtMTIuMjEsMGMtMi41Ni4xMS01LjM3LjYxLTcuOTYuNy0uMTMsMi40Ni0uNTksNS4xOC0uNyw3LjYyLS4xOSw0LjUyLjUxLDkuOTMuMDIsMTQuMjctLjQ1LDQuMDItNS42OSw0LjAxLTYuMzctLjA5LS41NC0zLjIyLS4yMy0xMC0uMS0xMy41MS4wOS0yLjMuNTMtNC'+
			'45NS42OS03LjI4LTguODYuOS0zOS42MSw5LjY1LTIwLjU5LDIwLjc1LDQuNjQsMi43MSwxMC41NCw0LjQ1LDE1Ljc3LDUuNiwxMy4xNSwyLjksMjcuMDUsMy4wOSw0MC40MSwxLjc3WiIgY2xhc3M9ImNscy0xIi8+Cjwvc3ZnPgo=';
		me._start_rotate_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._start_rotate_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDI3MS42NSAyNjIuODkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZGF0YS1uYW1lPSJMYXllciAxIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICAgIHN0cm9rZTogIzE0ZDljYzsKICAgICAgICBzdHJva2Utd2lkdGg6IC41cHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMSwgLmNscy0yIHsKICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgIC'+
			'AgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNmZmY7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiA0cHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMyB7CiAgICAgICAgZmlsbDogIzE0ZDljYzsKICAgICAgfQogICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxyZWN0IHJ4PSIyOS42NCIgcnk9IjI5LjY0IiB5PSI1MC40NSIgaGVpZ2h0PSIxNjIiIHg9IjU0LjgzIiBjbGFzcz0iY2xzLTMiIHdpZHRoPSIxNjIiLz4KIDxnPgogIDxwYXRoIGQ9Ik0xNTYuOSwxNDUuMDJjNy40LTEuMiwxOC44NC0zLjc2LDI0LjQtOS4wMSw2LjcyLTYuMzUtMi41OC0xMS44Ni04LjEyLTEzLjcyLS4xMS42NS41LDEuMDIu'+
			'NjEsMS42LjU5LDIuOTEtMi41Myw0LjkyLTUuMDEsMy4zMS0xLjk3LTEuMjgtNS4xMS03Ljk2LTcuMDQtOS45NC0uNDgtMS4yMy0uMjUtMi45MS44LTMuNzQsMi45NC0uOTMsMTAuMDYtNC40OSwxMi44Mi00LjExczMuMzYsMy44OCwxLjA1LDUuNzdjLS4zLjI1LTEuODMuMzQtMS4xOSwxLC4xNy4xNywzLjU3LDEuMzksNC40MiwxLjg2LDEyLjY2LDcuMDEsMTQuNzcsMTcuOTksMS40NSwyNS45LTcuMzUsNC4zNi0xNi40Miw2LjI4LTI0Ljc0LDcuODMtMS4wNCwzLjU1LTEuNTUsNy4zOC0yLjU0LDExLjA0LTIuMDksNy43Ny03LjIzLDIxLjYyLTE2LjUyLDIyLjg0LTguNzIsMS4xNC0xNC41OS04Lj'+
			'g1LTE3LjA1LTE1Ljg2LS42OS4yOC0uNjYsMS40Mi0xLjIsMi4wMi0yLjEzLDIuMzMtNS45NS40LTUuNTEtMi43OC4xNy0xLjIyLDMuMDUtOC45NSwzLjcxLTEwLjIzLjk2LTEuODcsMi4yMi0yLjcsNC4zOS0yLjEsMi40OSwyLjMzLDcuNjgsNC43Myw5LjY2LDcuMzEsMi40MSwzLjE0LTEuMzYsNi42OC00LjQyLDQuNDItLjE0LDEuMTUuODUsMi44MywxLjQ3LDMuOTYsMS45MiwzLjQ4LDUuNzEsOS4wMywxMC4yMSw2LjAzLDYuNS00LjM1LDkuNjktMTguNiwxMC44OC0yNS45My0xNS41MiwxLjQ1LTMyLjM1Ljg2LTQ3LjM0LTMuNzMtOC44OC0yLjcyLTI1LjI1LTEwLjEtMTkuMzUtMjIuMDcsNC43'+
			'Ni05LjY3LDIyLjg2LTE0LjA3LDMyLjcxLTE1LjMsMS4wNC00LjkzLDEuODktOS45MSwzLjQzLTE0LjcyLDguNS0yNi41OSwyNS45OC0yNS42MiwzNC4xMS41Miw0LjcsMTUuMTIsNS4zNCwzMi4xNiwzLjksNDcuODRaTTE1MC40MiwxNDYuMDFjMS4zOS0xNS45MSwxLjE5LTMzLjY5LTQuMTQtNDguOS0xLjU4LTQuNTEtNi45NC0xNy4xNS0xMy4zLTEyLjQ4LTYuNTEsNC43OS05LjQsMTguMTktMTAuNjksMjUuNzgsMi41Ny0uMTIsNS40Mi0uNiw3Ljk2LS42OSwyLjg2LS4xLDguMjMtLjM3LDEwLjg1LjA0LDQsLjYyLDMuNzMsNS44Ny4zNCw2LjQxcy04LjUyLS4xNS0xMi4yMSwwYy0yLjU2LjExLT'+
			'UuMzcuNjEtNy45Ni43LS4xMywyLjQ2LS41OSw1LjE4LS43LDcuNjItLjE5LDQuNTIuNTEsOS45My4wMiwxNC4yNy0uNDUsNC4wMi01LjY5LDQuMDEtNi4zNy0uMDktLjU0LTMuMjItLjIzLTEwLS4xLTEzLjUxLjA5LTIuMy41My00Ljk1LjY5LTcuMjgtOC44Ni45LTM5LjYxLDkuNjUtMjAuNTksMjAuNzUsNC42NCwyLjcxLDEwLjU0LDQuNDUsMTUuNzcsNS42LDEzLjE1LDIuOSwyNy4wNSwzLjA5LDQwLjQxLDEuNzdaIiBjbGFzcz0iY2xzLTEiLz4KICA8bGluZSB5MT0iODkuOTgiIHkyPSIxNzguOTEiIHgxPSI4OC40NSIgeDI9IjE4Ny45IiBjbGFzcz0iY2xzLTIiLz4KIDwvZz4KPC9zdmc+Cg=='+
			'';
		me._start_rotate_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="start_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -14px;';
		hs+='cursor : pointer;';
		hs+='height : 77px;';
		hs+='position : absolute;';
		hs+='right : -13px;';
		hs+='visibility : inherit;';
		hs+='width : 77px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._start_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._start_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._start_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._start_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._start_rotate_image.style.transition='';
				if (me._start_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._start_rotate_image.style.visibility="hidden";
					me._start_rotate_image.ggVisible=false;
				}
				else {
					me._start_rotate_image.style.visibility=(Number(me._start_rotate_image.style.opacity)>0||!me._start_rotate_image.style.opacity)?'inherit':'hidden';
					me._start_rotate_image.ggVisible=true;
				}
			}
		}
		me._start_rotate_image.logicBlock_visible();
		me._start_rotate_image.onmouseenter=function (e) {
			me._start_rotate_image__img.style.visibility='hidden';
			me._start_rotate_image__imgo.style.visibility='inherit';
			me.elementMouseOver['start_rotate_image']=true;
		}
		me._start_rotate_image.onmouseleave=function (e) {
			me._start_rotate_image__img.style.visibility='inherit';
			me._start_rotate_image__imgo.style.visibility='hidden';
			me.elementMouseOver['start_rotate_image']=false;
		}
		me._start_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._start_rotate_image);
		me.divSkin.appendChild(me._button_auto_rotate);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -18px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 117px;';
		hs+='position : absolute;';
		hs+='right : -103px;';
		hs+='visibility : inherit;';
		hs+='width : 556px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("<div class=\"ggmarkdown\"><h1>%1<\/h1>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_1.ggUpdateText();
		});
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_1.onclick=function (e) {
			player.openUrl("https:\/\/privae.in\/360","");
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._text_1);
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 26px;';
		hs+='left : -197px;';
		hs+='position : absolute;';
		hs+='top : -239px;';
		hs+='visibility : inherit;';
		hs+='width : 133px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("Click to explore", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._text_2);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDI3MS42NSAyNjIuODkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZGF0YS1uYW1lPSJMYXllciAxIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICMxNGQ5Y2M7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8cmVjdCByeD0iMjkuNjQiIHJ5PSIyOS42NCIgeT0iNTAuNDUiIGhlaWdodD0iMTYyIiB4PSI1NC44MyIgY2xhc3'+
			'M9ImNscy0yIiB3aWR0aD0iMTYyIi8+CiA8Zz4KICA8cGF0aCBkPSJNMTM1LjQxLDc3Ljk5YzIuNTEtLjQ1LDQuODMsNS43Nyw2LjIzLDcuNjgsMi4zNSwzLjIyLDUuNDksNC45MSw5LjU5LDQuMTUsMy4wNS0uNTYsOC42MS01LjIzLDEwLjgzLTQuODcsMi40Mi40LDEuMzksNS44NiwxLjUxLDcuODcuNDMsNy4yMSwzLjIxLDEwLjM5LDEwLjUzLDEwLjg3LDIuNzYuMTgsOS4yNi0xLjQ1LDguMDUsMy4wMS0uNzYsMi44LTQuMDksNi4wMi00LjcxLDkuMzQtMS42NSw4LjkyLDYuMjIsOS42MiwxMC44NywxMy41NywxLjIyLDEuMDQsMS40MSwyLjM2LjE5LDMuNS0zLjU3LDMuMzQtOS44OSwzLjctMTEu'+
			'MDYsMTAuMDEtMS4xOCw2LjM3LDUuNDEsMTEuMjksNC44NywxNC41NC0uNDEsMi40NS02LjE1LDEuMzgtOC4yMSwxLjUxLTcuMzIuNDctMTAuMSwzLjY2LTEwLjUzLDEwLjg3LS4xNiwyLjcxLDEuMzksOC45Mi0zLjAxLDcuNzEtNC42Mi0xLjI3LTYuODYtNS44NS0xMy4wNS00Ljcxcy02LjcxLDcuMTQtOS44NiwxMC44N2MtMS4wMywxLjIyLTIuMzcsMS40LTMuNS4xOS0zLjMxLTMuNTQtMy42OS05Ljg5LTEwLjAxLTExLjA2LTYuMzctMS4xOC0xMS4yOSw1LjQxLTE0LjU0LDQuODctMi40Mi0uNDEtMS4zOS01Ljg2LTEuNTEtNy44Ny0uNDMtNy4yMS0zLjIxLTEwLjM5LTEwLjUzLTEwLjg3LTIuNz'+
			'UtLjE4LTkuMjcsMS40NS04LjA1LTMuMDEsMS4yNy00LjYyLDUuODUtNi44Niw0LjcxLTEzLjA1LTEuMTItNi4wNy03LjE3LTYuNzItMTAuODctOS44Ni0xLjIyLTEuMDQtMS40MS0yLjM2LS4xOS0zLjUsMy41NC0zLjMxLDkuODktMy42OSwxMS4wNi0xMC4wMXMtNS40MS0xMS4yOS00Ljg3LTE0LjU0Yy40MS0yLjQ1LDYuMTUtMS4zOCw4LjIxLTEuNTEsNy4zMi0uNDcsMTAuMS0zLjY2LDEwLjUzLTEwLjg3LjExLTEuODItLjctNi45NCwxLTcuNywyLS45LDYuMjYsMi41NCw4LjIzLDMuNDYsNC41LDIuMDgsOC41OSwyLjA0LDExLjk5LTEuOTYsMS40Ni0xLjcxLDQuNDItOC4zNSw2LjEtOC42NFpN'+
			'MTEyLjA5LDkwLjY0djUuODVjMCw0LjQxLTYuNzksMTEuMi0xMS4yLDExLjJoLTUuODVjMi4yOCw0LjU2LDQuNDYsOC4wNiwzLjE5LDEzLjM5LTEuMzgsNS44Mi00LjczLDcuMDMtOS4xMSw5Ljk0LS4yMS4xNC0uNi0uMDktLjQ0LjU3LjA3LjI4LDQuMTUsMi4zNiw0Ljk5LDMuMDQsNC44NCwzLjksNi4wNCwxMC4xLDMuNzcsMTUuNzUtLjY3LDEuNjctMS45NiwzLjA1LTIuNCw0Ljc5aDUuODVjNC40MSwwLDExLjIsNi43OSwxMS4yLDExLjJ2NS44NWM0LjYyLTIuMjksNy45OS00LjQ4LDEzLjM5LTMuMTksNS44MiwxLjM5LDcuMDIsNC43Miw5Ljk0LDkuMTEuMTQuMjEtLjA5LjYuNTcuNDQuMjgtLj'+
			'A3LDIuMzYtNC4xNSwzLjA0LTQuOTksMy45LTQuODQsMTAuMS02LjA0LDE1Ljc1LTMuNzcsMS42Ny42NywzLjA1LDEuOTYsNC43OSwyLjR2LTUuODVjMC00LjQxLDYuNzktMTEuMiwxMS4yLTExLjJoNS44NWMtMi4yNy00LjU3LTQuNDktOC4wNS0zLjE5LTEzLjM5LDEuNDQtNS44Nyw0LjY3LTYuOTksOS4xLTkuOTQuMjEtLjE0LjYuMDkuNDQtLjU3LS4wNy0uMjgtNC4xNS0yLjM2LTQuOTktMy4wNC00Ljg0LTMuOS02LjA0LTEwLjEtMy43Ny0xNS43NS42Ny0xLjY3LDEuOTYtMy4wNSwyLjQtNC43OWgtNS44NWMtNC40MSwwLTExLjItNi43OS0xMS4yLTExLjJ2LTUuODVjLTQuNTYsMi4yOC04LjA2'+
			'LDQuNDYtMTMuMzksMy4xOS01LjgyLTEuMzgtNy4wMy00LjczLTkuOTQtOS4xMS0uMTQtLjIxLjA5LS42LS41Ny0uNDQtLjI4LjA3LTIuMzYsNC4xNS0zLjA0LDQuOTktMy45LDQuODQtMTAuMSw2LjA0LTE1Ljc1LDMuNzctLjY3LS4yNy00LjU2LTIuNjYtNC43OS0yLjRaIiBjbGFzcz0iY2xzLTEiLz4KICA8cGF0aCBkPSJNMTMxLjQxLDk3Ljc2YzI0LjM0LTIuNTYsNDMuNDksMTguOTUsMzcuMDksNDIuNzgtNi44OCwyNS42LTQwLjE3LDMzLjM1LTU3LjkyLDEzLjY0cy01Ljk5LTUzLjYsMjAuODMtNTYuNDJaTTEzMy40MiwxMDEuNzhjLTIyLjE0LDEuOTItMzQuNDYsMjYuMy0yMi44MSw0NS4zNC'+
			'wxMS40NSwxOC43MiwzOS4yNywxOC42LDUwLjU2LS4yMSwxMi40Ny0yMC43Ny0zLjY5LTQ3LjIyLTI3Ljc1LTQ1LjE0WiIgY2xhc3M9ImNscy0xIi8+CiAgPHBhdGggZD0iTTE1Ny42NCwxMzYuN2MtLjgxLS44LS4yOC02LjIyLS40Mi03Ljc3LS4yLTIuMjItMS4xNi01LjIxLTIuMTYtNy4yLS45LTEuOC0zLjM4LTMuODktMi4xNS01LjgxLDIuNjItNC4wNyw2LjcyLDUuNDQsNy4zMyw3LjMxLDEuMDQsMy4yMiwxLjk4LDkuNDMuOTEsMTIuNjQtLjQ1LDEuMzQtMi42MywxLjczLTMuNTIuODRaIiBjbGFzcz0iY2xzLTEiLz4KICA8cGF0aCBkPSJNMTQ4Ljc1LDExMC4xMmMyLjgyLS4zLDMuMSwzLjky'+
			'LjYsNC4yNy0zLjE0LjQ0LTMuMDgtNC4wMS0uNi00LjI3WiIgY2xhc3M9ImNscy0xIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 361px;';
		hs+='height : 80px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_1.onclick=function (e) {
			player.openNext("{node19}","");
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_1);
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDI3MS42NSAyNjIuODkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZGF0YS1uYW1lPSJMYXllciAxIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICMxNGQ5Y2M7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8cmVjdCByeD0iMjkuNjQiIHJ5PSIyOS42NCIgeT0iNTAuNDUiIGhlaWdodD0iMTYyIiB4PSI1NC44MyIgY2xhc3'+
			'M9ImNscy0yIiB3aWR0aD0iMTYyIi8+CiA8Zz4KICA8cGF0aCBkPSJNMTIxLjA4LDczLjcyYzEuMTYtLjExLDIuNDYsMS4xNSwyLjI4LDIuMjhzLTIuOTQsMy44LTMuNzUsNC45NGMtMzEuMDQsNDMuODMsMjIuMTgsOTguMTgsNjYuNTMsNjYuODUuOTUtLjY3LDQuMDQtMy41NSw0LjYyLTMuNzMsNS4yLTEuNi45Myw3Ljk4LjE1LDkuNzktMTAuNDcsMjQuMjUtMzYuMjYsMzguNS02Mi40OCwzNC43NS01OC43NC04LjQtNjguODUtOTAuMTEtMTQtMTEyLjUxLDEuNDItLjU4LDUuMzktMi4yNCw2LjY1LTIuMzZaTTE4NywxNTIuMzRjLTIuMjcuOTktNC4yOCwyLjUyLTYuNTMsMy41OS00Mi42MywyMC4z'+
			'LTg4Ljk2LTIzLjgxLTY5LjY0LTY3LjcxLDEuMjMtMi44MSwyLjk3LTUuMzUsNC4yMy04LjEzLTE0LjI4LDYuMzktMjUuOTIsMTguNDgtMzAuNDEsMzMuNjUtOC4wOCwyNy4yNyw1LjQyLDU3LjY0LDMyLjI3LDY3Ljc1czU4LjQ0LTIuMiw3MC4wOS0yOS4xNFoiIGNsYXNzPSJjbHMtMSIvPgogIDxwYXRoIGQ9Ik0xNjAuNTMsMTQ1aC4xMXMuMDYuMDguMDguMTNjLjIyLjQ2LjI5LDEuMTYuNTEsMS42MS4wNy4xNS4xNi4xNy4zMS4xOC41Ni4wNSwxLjE4LS4wNSwxLjc0LjAxLjA4LjExLjA2LjE4LS4wMy4yNy0uMzQuMzQtMSwuNjQtMS4zNC45OC0uMTEuMTEtLjEzLjE0LS4xLjMuMDkuNDkuNDMsMS'+
			'4wOS41MSwxLjU4LjA0LjIyLS4wMS4zLS4yMy4yLS4zNi0uMTYtLjg4LS42Ny0xLjI1LS45LS4yNS0uMTUtLjI0LS4xNy0uNDktLjAxLS40NC4yNi0uODUuNjUtMS4zLjkybC0uMTcuMDItLjA3LS4wOS41NC0xLjg2Yy0uMDItLjA3LS4wNi0uMTEtLjExLS4xNi0uMzUtLjM1LS45OS0uNjMtMS4zNC0uOTgtLjEyLS4xMi0uMTYtLjI1LjA1LS4yOC41LS4wNywxLjE0LjA1LDEuNjYsMCwuMjQtLjAyLjI1LS4wNi4zMy0uMjcuMTctLjQ2LjI5LTEuMS41LTEuNTIuMDMtLjA1LjA1LS4xLjExLS4xM1oiIGNsYXNzPSJjbHMtMSIvPgogIDxwYXRoIGQ9Ik0xNDQuMjYsMTI2LjE2aC4xMXMuMDYuMDguMDgu'+
			'MTNjLjIyLjQ2LjI5LDEuMTYuNTEsMS42MS4wNy4xNS4xNi4xNy4zMS4xOC41Ni4wNSwxLjE4LS4wNSwxLjc0LjAxLjA4LjExLjA2LjE4LS4wMy4yNy0uMzQuMzQtMSwuNjQtMS4zNC45OC0uMTEuMTEtLjEzLjE0LS4xLjMuMDkuNDkuNDMsMS4wOS41MSwxLjU4LjA0LjIyLS4wMS4zLS4yMy4yLS4zNi0uMTYtLjg4LS42Ny0xLjI1LS45LS4yNS0uMTUtLjI0LS4xNy0uNDktLjAxLS40NC4yNi0uODUuNjUtMS4zLjkybC0uMTcuMDItLjA3LS4wOS41NC0xLjg2Yy0uMDItLjA3LS4wNi0uMTEtLjExLS4xNi0uMzUtLjM1LS45OS0uNjMtMS4zNC0uOTgtLjEyLS4xMi0uMTYtLjI1LjA1LS4yOC41LS4wNy'+
			'wxLjE0LjA1LDEuNjYsMCwuMjQtLjAyLjI1LS4wNi4zMy0uMjcuMTctLjQ2LjI5LTEuMS41LTEuNTIuMDMtLjA1LjA1LS4xLjExLS4xM1oiIGNsYXNzPSJjbHMtMSIvPgogIDxwYXRoIGQ9Ik0xMjcuNTYsMTEyLjQ2aC4xMXMuMDYuMDguMDguMTNjLjIyLjQ2LjI5LDEuMTYuNTEsMS42MS4wNy4xNS4xNi4xNy4zMS4xOC41Ni4wNSwxLjE4LS4wNSwxLjc0LjAxLjA4LjExLjA2LjE4LS4wMy4yNy0uMzQuMzQtMSwuNjQtMS4zNC45OC0uMTEuMTEtLjEzLjE0LS4xLjMuMDkuNDkuNDMsMS4wOS41MSwxLjU4LjA0LjIyLS4wMS4zLS4yMy4yLS4zNi0uMTYtLjg4LS42Ny0xLjI1LS45LS4yNS0uMTUtLjI0'+
			'LS4xNy0uNDktLjAxLS40NC4yNi0uODUuNjUtMS4zLjkybC0uMTcuMDItLjA3LS4wOS41NC0xLjg2Yy0uMDItLjA3LS4wNi0uMTEtLjExLS4xNi0uMzUtLjM1LS45OS0uNjMtMS4zNC0uOTgtLjEyLS4xMi0uMTYtLjI1LjA1LS4yOC41LS4wNywxLjE0LjA1LDEuNjYsMCwuMjQtLjAyLjI1LS4wNi4zMy0uMjcuMTctLjQ2LjI5LTEuMS41LTEuNTIuMDMtLjA1LjA1LS4xLjExLS4xM1oiIGNsYXNzPSJjbHMtMSIvPgogIDxwYXRoIGQ9Ik0xMzUuNywxMDAuMDRoLjExcy4wNi4wOC4wOC4xM2MuMjIuNDYuMjksMS4xNi41MSwxLjYxLjA3LjE1LjE2LjE3LjMxLjE4LjU2LjA1LDEuMTgtLjA1LDEuNzQuMD'+
			'EuMDguMTEuMDYuMTgtLjAzLjI3LS4zNC4zNC0xLC42NC0xLjM0Ljk4LS4xMS4xMS0uMTMuMTQtLjEuMy4wOS40OS40MywxLjA5LjUxLDEuNTguMDQuMjItLjAxLjMtLjIzLjItLjM2LS4xNi0uODgtLjY3LTEuMjUtLjktLjI1LS4xNS0uMjQtLjE3LS40OS0uMDEtLjQ0LjI2LS44NS42NS0xLjMuOTJsLS4xNy4wMi0uMDctLjA5LjU0LTEuODZjLS4wMi0uMDctLjA2LS4xMS0uMTEtLjE2LS4zNS0uMzUtLjk5LS42My0xLjM0LS45OC0uMTItLjEyLS4xNi0uMjUuMDUtLjI4LjUtLjA3LDEuMTQuMDUsMS42NiwwLC4yNC0uMDIuMjUtLjA2LjMzLS4yNy4xNy0uNDYuMjktMS4xLjUtMS41Mi4wMy0uMDUu'+
			'MDUtLjEuMTEtLjEzWiIgY2xhc3M9ImNscy0xIi8+CiAgPHBhdGggZD0iTTEyNy45OSw4Ny4xOWguMTFzLjA2LjA4LjA4LjEzYy4yMi40Ni4yOSwxLjE2LjUxLDEuNjEuMDcuMTUuMTYuMTcuMzEuMTguNTYuMDUsMS4xOC0uMDUsMS43NC4wMS4wOC4xMS4wNi4xOC0uMDMuMjctLjM0LjM0LTEsLjY0LTEuMzQuOTgtLjExLjExLS4xMy4xNC0uMS4zLjA5LjQ5LjQzLDEuMDkuNTEsMS41OC4wNC4yMi0uMDEuMy0uMjMuMi0uMzYtLjE2LS44OC0uNjctMS4yNS0uOS0uMjUtLjE1LS4yNC0uMTctLjQ5LS4wMS0uNDQuMjYtLjg1LjY1LTEuMy45MmwtLjE3LjAyLS4wNy0uMDkuNTQtMS44NmMtLjAyLS4wNy'+
			'0uMDYtLjExLS4xMS0uMTYtLjM1LS4zNS0uOTktLjYzLTEuMzQtLjk4LS4xMi0uMTItLjE2LS4yNS4wNS0uMjguNS0uMDcsMS4xNC4wNSwxLjY2LDAsLjI0LS4wMi4yNS0uMDYuMzMtLjI3LjE3LS40Ni4yOS0xLjEuNS0xLjUyLjAzLS4wNS4wNS0uMS4xMS0uMTNaIiBjbGFzcz0iY2xzLTEiLz4KICA8cGF0aCBkPSJNMTU5LjY4LDExMS42aC4xMXMuMDYuMDguMDguMTNjLjIyLjQ2LjI5LDEuMTYuNTEsMS42MS4wNy4xNS4xNi4xNy4zMS4xOC41Ni4wNSwxLjE4LS4wNSwxLjc0LjAxLjA4LjExLjA2LjE4LS4wMy4yNy0uMzQuMzQtMSwuNjQtMS4zNC45OC0uMTEuMTEtLjEzLjE0LS4xLjMuMDkuNDku'+
			'NDMsMS4wOS41MSwxLjU4LjA0LjIyLS4wMS4zLS4yMy4yLS4zNi0uMTYtLjg4LS42Ny0xLjI1LS45LS4yNS0uMTUtLjI0LS4xNy0uNDktLjAxLS40NC4yNi0uODUuNjUtMS4zLjkybC0uMTcuMDItLjA3LS4wOS41NC0xLjg2Yy0uMDItLjA3LS4wNi0uMTEtLjExLS4xNi0uMzUtLjM1LS45OS0uNjMtMS4zNC0uOTgtLjEyLS4xMi0uMTYtLjI1LjA1LS4yOC41LS4wNywxLjE0LjA1LDEuNjYsMCwuMjQtLjAyLjI1LS4wNi4zMy0uMjcuMTctLjQ2LjI5LTEuMS41LTEuNTIuMDMtLjA1LjA1LS4xLjExLS4xM1oiIGNsYXNzPSJjbHMtMSIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 425px;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_2.onclick=function (e) {
			player.openNext("{node20}","");
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_2);
		el=me._button_close_map=document.createElement('div');
		els=me._button_close_map__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDI3MS42NSAyNjIuODkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZGF0YS1uYW1lPSJMYXllciAxIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjZmZmOwogICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDsKICAgICAgICBzdHJva2Utd2lkdGg6IDRweDsKICAgICAgfQoKICAgICAgLmNscy'+
			'0zIHsKICAgICAgICBmaWxsOiAjMTRkOWNjOwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPHJlY3Qgcng9IjI5LjY0IiByeT0iMjkuNjQiIHk9IjY0LjI4IiBoZWlnaHQ9IjE2MiIgeD0iNTQuNTciIGNsYXNzPSJjbHMtMyIgd2lkdGg9IjE2MiIvPgogPGc+CiAgPHBhdGggZD0iTTE4Mi44OCwxNzIuNWwtMjcuNywxMi43My0xLjctLjI2LTI4LjY5LTExLjQ0Yy05LjM0LDMuMTItMTguNjMsOC4xNi0yNy45NCwxMS4xNS0yLjgyLjkxLTQuNjQuNi01LjA1LTIuNzJsLjE1LTY2LjU5Yy40Mi0xLjI3LDEuMDUtMS42MSwyLjE3LTIuMTQsMy4xNS0xLjUsNy4wMy0yLjU3LDEwLjI4LTMuOTUs'+
			'NS41OC0yMS4yNSwzNS4xMS0yMS4xOSw0MC45MS0uMDlsOS4zNCwzLjc5LDI1LjE1LTExLjU1YzEuOTUtLjcsNC4wMi44NSw0LjA1LDIuODdsLS4xNSw2Ni44OC0uODIsMS4zNFpNMTI0LjYsMTQ0LjEyYy44Ny0uNzYsMS40Ny0xLjk3LDIuMDYtMi45NywzLjU3LTYuMDgsNy45Mi0xMi45NSwxMS4wMy0xOS4xNiw4LjkxLTE3Ljg1LTEzLjU5LTMwLjc4LTI0LjU4LTE3LjExLTMuNDQsNC4yOC00LjE1LDEwLjIyLTIuMDcsMTUuMjlsMTMuNTcsMjMuOTZaTTE3Ny43OSwxMDkuMDRsLTE5Ljg0LDguOTF2NTkuNTJsMTkuODQtOS4zNXYtNTkuMDlaTTk3Ljg2LDExOC4zOHY1OS4zOGwyMy44Mi05LjUzLj'+
			'MxLTE2Ljc5Yy00LjYtOS4yNS0xMS4yNC0xOC4xMy0xNS43NS0yNy4zNC0xLjI2LTIuNTctMi4wNy01LjMtMi4zNC04LjE2bC02LjA0LDIuNDRaTTE1MS45MiwxMTguMjRsLTYuMzItMi4zYy4xMSwzLjAyLTEuMSw1Ljk4LTIuNDQsOC42My00LjQ3LDguODUtMTAuNjMsMTcuMzYtMTUuMTcsMjYuMjRsLS4yNCwxNy4wNCwyNC4xNyw5Ljkxdi01OS41MloiIGNsYXNzPSJjbHMtMSIvPgogIDxwYXRoIGQ9Ik0xMzEuMTEsMTIwLjczYy04LjM3LDguMTgtMjEuMDktNC42NS0xMi41Ni0xMi45OXMyMS4wOCw0LjY3LDEyLjU2LDEyLjk5Wk0xMjMuOTQsMTExLjRjLTMuNTkuODMtMi40MSw2Ljk1LDIuMTEs'+
			'NS41NiwyLjg3LS44OCwyLjItNi41NS0yLjExLTUuNTZaIiBjbGFzcz0iY2xzLTEiLz4KIDwvZz4KIDxsaW5lIHkxPSI5OS4yMiIgeTI9IjE4Mi43OCIgeDE9Ijg0LjAzIiB4Mj0iMTg4LjA0IiBjbGFzcz0iY2xzLTIiLz4KPC9zdmc+Cg==';
		me._button_close_map__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="button_close_map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 490px;';
		hs+='cursor : pointer;';
		hs+='height : 77px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 77px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 100%';
		me._button_close_map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_close_map.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_close_map.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_close_map.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_close_map.style.transition='';
				if (me._button_close_map.ggCurrentLogicStateVisible == 0) {
					me._button_close_map.style.visibility=(Number(me._button_close_map.style.opacity)>0||!me._button_close_map.style.opacity)?'inherit':'hidden';
					me._button_close_map.ggVisible=true;
				}
				else {
					me._button_close_map.style.visibility="hidden";
					me._button_close_map.ggVisible=false;
				}
			}
		}
		me._button_close_map.logicBlock_visible();
		me._button_close_map.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_close_map);
		el=me._button_toggle_map=document.createElement('div');
		el.ggId="button_toggle_map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 509px;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 32px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 100%';
		me._button_toggle_map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_toggle_map.onclick=function (e) {
			player.setVariableValue('vis_map', !player.getVariableValue('vis_map'));
		}
		me._button_toggle_map.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_open_map=document.createElement('div');
		els=me._button_open_map__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDI3MS42NSAyNjIuODkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZGF0YS1uYW1lPSJMYXllciAxIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICMxNGQ5Y2M7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8cmVjdCByeD0iMjkuNjQiIHJ5PSIyOS42NCIgeT0iNjQuMjgiIGhlaWdodD0iMTYyIiB4PSI1NC41NyIgY2xhc3'+
			'M9ImNscy0yIiB3aWR0aD0iMTYyIi8+CiA8Zz4KICA8cGF0aCBkPSJNMTgyLjg4LDE3Mi41bC0yNy43LDEyLjczLTEuNy0uMjYtMjguNjktMTEuNDRjLTkuMzQsMy4xMi0xOC42Myw4LjE2LTI3Ljk0LDExLjE1LTIuODIuOTEtNC42NC42LTUuMDUtMi43MmwuMTUtNjYuNTljLjQyLTEuMjcsMS4wNS0xLjYxLDIuMTctMi4xNCwzLjE1LTEuNSw3LjAzLTIuNTcsMTAuMjgtMy45NSw1LjU4LTIxLjI1LDM1LjExLTIxLjE5LDQwLjkxLS4wOWw5LjM0LDMuNzksMjUuMTUtMTEuNTVjMS45NS0uNyw0LjAyLjg1LDQuMDUsMi44N2wtLjE1LDY2Ljg4LS44MiwxLjM0Wk0xMjQuNiwxNDQuMTJjLjg3LS43Niwx'+
			'LjQ3LTEuOTcsMi4wNi0yLjk3LDMuNTctNi4wOCw3LjkyLTEyLjk1LDExLjAzLTE5LjE2LDguOTEtMTcuODUtMTMuNTktMzAuNzgtMjQuNTgtMTcuMTEtMy40NCw0LjI4LTQuMTUsMTAuMjItMi4wNywxNS4yOWwxMy41NywyMy45NlpNMTc3Ljc5LDEwOS4wNGwtMTkuODQsOC45MXY1OS41MmwxOS44NC05LjM1di01OS4wOVpNOTcuODYsMTE4LjM4djU5LjM4bDIzLjgyLTkuNTMuMzEtMTYuNzljLTQuNi05LjI1LTExLjI0LTE4LjEzLTE1Ljc1LTI3LjM0LTEuMjYtMi41Ny0yLjA3LTUuMy0yLjM0LTguMTZsLTYuMDQsMi40NFpNMTUxLjkyLDExOC4yNGwtNi4zMi0yLjNjLjExLDMuMDItMS4xLDUuOT'+
			'gtMi40NCw4LjYzLTQuNDcsOC44NS0xMC42MywxNy4zNi0xNS4xNywyNi4yNGwtLjI0LDE3LjA0LDI0LjE3LDkuOTF2LTU5LjUyWiIgY2xhc3M9ImNscy0xIi8+CiAgPHBhdGggZD0iTTEzMS4xMSwxMjAuNzNjLTguMzcsOC4xOC0yMS4wOS00LjY1LTEyLjU2LTEyLjk5czIxLjA4LDQuNjcsMTIuNTYsMTIuOTlaTTEyMy45NCwxMTEuNGMtMy41OS44My0yLjQxLDYuOTUsMi4xMSw1LjU2LDIuODctLjg4LDIuMi02LjU1LTIuMTEtNS41NloiIGNsYXNzPSJjbHMtMSIvPgogPC9nPgo8L3N2Zz4K';
		me._button_open_map__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_open_map__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDI3MS42NSAyNjIuODkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZGF0YS1uYW1lPSJMYXllciAxIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjZmZmOwogICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDsKICAgICAgICBzdHJva2Utd2lkdGg6IDRweDsKICAgICAgfQoKICAgICAgLmNscy'+
			'0zIHsKICAgICAgICBmaWxsOiAjMTRkOWNjOwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPHJlY3Qgcng9IjI5LjY0IiByeT0iMjkuNjQiIHk9IjY0LjI4IiBoZWlnaHQ9IjE2MiIgeD0iNTQuNTciIGNsYXNzPSJjbHMtMyIgd2lkdGg9IjE2MiIvPgogPGc+CiAgPHBhdGggZD0iTTE4Mi44OCwxNzIuNWwtMjcuNywxMi43My0xLjctLjI2LTI4LjY5LTExLjQ0Yy05LjM0LDMuMTItMTguNjMsOC4xNi0yNy45NCwxMS4xNS0yLjgyLjkxLTQuNjQuNi01LjA1LTIuNzJsLjE1LTY2LjU5Yy40Mi0xLjI3LDEuMDUtMS42MSwyLjE3LTIuMTQsMy4xNS0xLjUsNy4wMy0yLjU3LDEwLjI4LTMuOTUs'+
			'NS41OC0yMS4yNSwzNS4xMS0yMS4xOSw0MC45MS0uMDlsOS4zNCwzLjc5LDI1LjE1LTExLjU1YzEuOTUtLjcsNC4wMi44NSw0LjA1LDIuODdsLS4xNSw2Ni44OC0uODIsMS4zNFpNMTI0LjYsMTQ0LjEyYy44Ny0uNzYsMS40Ny0xLjk3LDIuMDYtMi45NywzLjU3LTYuMDgsNy45Mi0xMi45NSwxMS4wMy0xOS4xNiw4LjkxLTE3Ljg1LTEzLjU5LTMwLjc4LTI0LjU4LTE3LjExLTMuNDQsNC4yOC00LjE1LDEwLjIyLTIuMDcsMTUuMjlsMTMuNTcsMjMuOTZaTTE3Ny43OSwxMDkuMDRsLTE5Ljg0LDguOTF2NTkuNTJsMTkuODQtOS4zNXYtNTkuMDlaTTk3Ljg2LDExOC4zOHY1OS4zOGwyMy44Mi05LjUzLj'+
			'MxLTE2Ljc5Yy00LjYtOS4yNS0xMS4yNC0xOC4xMy0xNS43NS0yNy4zNC0xLjI2LTIuNTctMi4wNy01LjMtMi4zNC04LjE2bC02LjA0LDIuNDRaTTE1MS45MiwxMTguMjRsLTYuMzItMi4zYy4xMSwzLjAyLTEuMSw1Ljk4LTIuNDQsOC42My00LjQ3LDguODUtMTAuNjMsMTcuMzYtMTUuMTcsMjYuMjRsLS4yNCwxNy4wNCwyNC4xNyw5Ljkxdi01OS41MloiIGNsYXNzPSJjbHMtMSIvPgogIDxwYXRoIGQ9Ik0xMzEuMTEsMTIwLjczYy04LjM3LDguMTgtMjEuMDktNC42NS0xMi41Ni0xMi45OXMyMS4wOCw0LjY3LDEyLjU2LDEyLjk5Wk0xMjMuOTQsMTExLjRjLTMuNTkuODMtMi40MSw2Ljk1LDIuMTEs'+
			'NS41NiwyLjg3LS44OCwyLjItNi41NS0yLjExLTUuNTZaIiBjbGFzcz0iY2xzLTEiLz4KIDwvZz4KIDxsaW5lIHkxPSI5OS4yMiIgeTI9IjE4Mi43OCIgeDE9Ijg0LjAzIiB4Mj0iMTg4LjA0IiBjbGFzcz0iY2xzLTIiLz4KPC9zdmc+Cg==';
		me._button_open_map__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_open_map";
		el.ggDy=-4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 77px;';
		hs+='position : absolute;';
		hs+='right : -22px;';
		hs+='top : calc(50% - ((77px + 0px) / 2) - 4px);';
		hs+='visibility : inherit;';
		hs+='width : 77px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 50%';
		me._button_open_map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_open_map.onmouseenter=function (e) {
			me._button_open_map__img.style.visibility='hidden';
			me._button_open_map__imgo.style.visibility='inherit';
			me.elementMouseOver['button_open_map']=true;
		}
		me._button_open_map.onmouseleave=function (e) {
			me._button_open_map__img.style.visibility='inherit';
			me._button_open_map__imgo.style.visibility='hidden';
			me.elementMouseOver['button_open_map']=false;
		}
		me._button_open_map.ggUpdatePosition=function (useTransition) {
		}
		me._button_toggle_map.appendChild(me._button_open_map);
		me.divSkin.appendChild(me._button_toggle_map);
		el=me._map_container=document.createElement('div');
		el.ggId="map_container";
		el.ggDx=122;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 214px;';
		hs+='left : calc(50% - ((286px + 0px) / 2) + 122px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((214px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 286px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._map_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_container.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_container.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_container.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_container.style.transition='';
				if (me._map_container.ggCurrentLogicStateVisible == 0) {
					me._map_container.style.visibility=(Number(me._map_container.style.opacity)>0||!me._map_container.style.opacity)?'inherit':'hidden';
					me._map_container.ggVisible=true;
				}
				else {
					me._map_container.style.visibility="hidden";
					me._map_container.ggVisible=false;
				}
			}
		}
		me._map_container.logicBlock_visible();
		me._map_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._map=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'googleroadmap';
		el.ggId="map";
		el.ggDx=-95;
		el.ggDy=-71;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='z-index: 0;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='height : 353.738%;';
		hs+='left : calc(50% - ((353.496% + 2px) / 2) - 95px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((353.738% + 2px) / 2) - 71px);';
		hs+='visibility : hidden;';
		hs+='width : 353.496%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map.style.transition='';
				if (me._map.ggCurrentLogicStateVisible == 0) {
					me._map.style.visibility=(Number(me._map.style.opacity)>0||!me._map.style.opacity)?'inherit':'hidden';
					if (me._map.ggMapNotLoaded && me._map.ggInitMap) {
						me._map.ggInitMap(false);
						me._map.ggInitMapMarkers(true);
					}
					me._map.ggVisible=true;
				}
				else {
					me._map.style.visibility="hidden";
					if (me._map.ggClearMap) me._map.ggClearMap();
					me._map.ggVisible=false;
				}
			}
		}
		me._map.logicBlock_visible();
		me._map.ggUpdatePosition=function (useTransition) {
		}
		me._map_container.appendChild(me._map);
		el=me._map_close=document.createElement('div');
		els=me._map_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTExMy40LDM3OS4yLTEzNS4zLDM1Ny4zeiBNLTE0NS44LDQxMi43YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0x'+
			'LjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTUuNywxNS43TC0xNDUuOCw0MTIuN3oiLz4KIDwvZz4KID'+
			'xnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MS42LDM5Ni45bDE1LjgsMTUuOGMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMt'+
			'MC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuOCwxNS44bDE1LjctMTUuN2MwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRMLTE2MS42LDM5Ni45eiIvPgogPC9nPgo8L3N2Zz4K';
		me._map_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTEwNi41LDM3Ny4zLTEzMC45LDM1Mi45eiBNLTE0Mi41LDQxNC41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40'+
			'LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTE3LjQsMTcuNEwtMTQyLjUsNDE0LjV6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMi'+
			'I+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjAuMSwzOTYuOWwxNy41LDE3LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAu'+
			'NC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN0wtMTYwLjEsMzk2Ljl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._map_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="map_close";
		el.ggDx=426;
		el.ggDy=-463;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 63px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 426px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((63px + 0px) / 2) - 463px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_close.onclick=function (e) {
			player.setVariableValue('vis_map', false);
		}
		me._map_close.onmouseenter=function (e) {
			me._map_close__img.style.visibility='hidden';
			me._map_close__imgo.style.visibility='inherit';
			me.elementMouseOver['map_close']=true;
		}
		me._map_close.onmouseleave=function (e) {
			me._map_close__img.style.visibility='inherit';
			me._map_close__imgo.style.visibility='hidden';
			me.elementMouseOver['map_close']=false;
		}
		me._map_close.ggUpdatePosition=function (useTransition) {
		}
		me._map_container.appendChild(me._map_close);
		me.divSkin.appendChild(me._map_container);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs = basePath + "images/image_1.png";
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -31px;';
		hs+='height : 196px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 326px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_1);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA0AAAADzCAYAAACv1XYEAAAACXBIWXMAAC4jAAAuIwF4pT92AAAZ8ElEQVR4nO3d33EcR7Yn4DMbeoc2rgGojn7aJ/JaAIwFxFrAHgsGY4FKFgiyQEULlrJgQAsu+bRPHd00YOOKFmgfkKD4ByCBxsmuP/l9EQopFNTpEliszl9m1sm//fnnnwEAANCC/zH2BQAAAByLAAQAADRDAAIAAJohAAEAAM0QgAAAgGYIQAAAQDMEIAAAoBkCEAAA0AwBCAAAaIYABAAANEMAAgAAmiEAAQAAzRCAAACAZghAAABAMwQgAACgGQIQAADQDAEIAABohgAEAAA0QwACAACaIQABAADNEIAAAIBmCEAAAEAzBCAAAKAZAhAAANAMAQgAAGiGAAQAADRDAAIAAJohAAEAAM0QgAAAgGYIQAAAQD'+
			'MEIAAAoBkCEAAA0AwBCAAAaIYABAAANEMAAgAAmiEAAQAAzRCAAACAZghAAABAMwQgAACgGQIQAADQDAEIAABohgAEAAA0QwACAACaIQABAADNEIAAAIBmCEAAAEAzfhj7AgBatu5WfUT8lFVvu9/9LasWACyRFSAAAKAZAhAAANAMAQgAAGiGAAQAADRDAAIAAJohAAEAAM0QgAAAgGYIQAAAQDMEIAAAoBkCEAAA0AwBCAAAaIYABAAANEMAAgAAmiEAAQAAzRCAAACAZghAAABAMwQgAACgGQIQAADQjB/GvgCAxl2PfQEA0JK//fnnn2NfAwAAwFHYAgcAADRDAAIAAJohAAEAAM0QgAAAgGYIQAAAQDMEIAAAoBkCEAAA0AwBCAAAaIYABAAANEMAAgAAmiEAAQAAzRCAAACAZghAAABAMwQgAACgGT+MfQFT'+
			'se5WVxHxfOzreIJ9+Ssi4m1E/BERb7f73R9jXVAr1t1qExGbkS/jKf6Im3sm4q/7aL/d7/YjXU9T/l/3vzaReP/8x/7/nmfVGsu6Ww0R0SWX7bf73XVyzdlad6sfI+J1Ysmr7X6XWW8R1t3qMiIuksr9sd3vsmqRbAFjgWO73O53b7//y+oQgP7yPCLOxr6IJ7jz2tfd6kPcDG5v/7o2sE3XxbzvnYiIF1/+i3W3ioh4F5/cPwaQVXQx//sn29uIeJlcs4+I8+Sac3YZuffdJrHWIpSQ2UfESWLNzXa/G7LqkaoLz/LH+HHMDxeAlu8kbv5AfvxDue5W7yPiOiJem7HjO56Vv15GfAxFv8df989+rAtj0YZIHjhGxNm6W3Xu2Y82ibVe+bne6SJy7+GImz8XQ3JNaI53gNp0GjcD2v+z7lZ/rLvVsO5W5yNfE/PxIi'+
			'J+iYjdulu9XXeryzLTCSnK1t0akzN9hZqzU7bqnCaWHBJrLUlfoeap72t4OgGIk7gJQ/9ed6v9ulttDGZ5hGdxE4b+uwTpbtzLYUH6CjUvPN8iInf1552tsV+rEDI/1VeqC80QgPjUaUT8FhH7dbfqDRR4pJdxsyp0ve5Wc24owgSULVW/J5c9iZt3X5pVVg8y31O4Sqy1JJuKtc9MNsHTCEDc5SQifoqIt2UWCx7jLCL+q6wICdE8RY3B9aZCzTnZJNZ674X8r1UImXfpK9eHRROA+JbTiPitzOh3I18L8/MyblYTm55x53Bla9X75LKnrU7slOd4Zne9IbHWkmyO8BkvfS/D4QQgHuIsblaDDGR5rJOI+GXdrV5bDeJAfYWamwo152CTXM/2ty9UCJnfsjnS58DiCEA81O1A1rYmDvEiblaDvBvEo5QtVh+Sy541'+
			'ei9mTmK9ctD2nfojfpYOnHAgAYjHehkR1x66HOAkbt4N2ox9IcxOjZWGpla0y5+7zDNprP58oXwvXhzxI0/CKhAcRADiEM9CCOJwvwlBPNJQoebLxp5hfWKtN9v97m1ivaW4jPyDTx/ymcAjCUAcSgjiKYQgHqy0xH5VoXQTg8fSlSzzTBqrP3fbjPCZzTb1gKcQgHgKIYinEIJ4DC2xD5cZ9N5v97vXifUWofLBp9+zGelzYbYEIJ7qWUT4MuRQV42+jM4jlS1Xb5LLLn72vHQle5FY0urP3foRP/usrPIBDyQAkeFs3a36sS+CWTqJCC2yeaihQs1NhZpT0ifW+hDO/vlKhS2Gh2hiOydk+WHsC1ioDxFxrBdEn8fxX7q8y0/rbnVdDi7kabJnue/Txfhf2hE31zDEcbsnMUPb/W4oky2Z9+3Zuls9X+JL/RW6kg'+
			'1aX9+pH/sCIuLFult15X05luHnsS+gsv2YHy4A1fF2u9+dH/MDyzaHLm4C0fOIOI/jD26Hcg08wbHvnYiPM5hd/HXvPDvyJbxYd6sL7xbwAFcR8UtyzctY5krQJrS+rqp8956NfBm3+ljmfdyk7X7Xj30NS2YL3EJs97v9dr+73u53V9v9brPd77qIWEXEvyLi/ZEu49RWuHkq986w3e8ut/vd84j4nxHxj4j4/YiXcWUrHA8wRP7BqC/LQHZpMrdF/W514U792BfwidZau8PBBKAFK6HoqoShv8dxtlY5mXoBtvvdHyUQXcRNkK7RgvhLp2EfO99RtmDVWCncVKg5mnW3ugitr6sqofnlyJfxJc9QeAABqBFlhv88boJQzRWhk/AAXpQSpDdxE4RqrwgJ0DxEX6Hm0p5b2a2vrxPrLcUmqc67yHu2Lu0+hioEoMaU'+
			'INRFxK8VP8YgdoFKELqIm61x2VuQbp2EZgh8R9mKlR3GT5bSEru0ls98L6VPrLUI5TsuK2xcRd4K22LuY6hJAGrUdr+7jJuBbA0nsbDtJPxlu98NcdMooVYI6ivVZVlqbMlayux55v/Hh/Jnns9dRE6DiQ9lu/F15O3O6JPqwGIJQA0rX2q1QtBSBhLcobQMPo86IejU4ah8T/KA8dazuR8oWVYmMt9L8e7P3fqkOp/+fLNqnpZ3wIB7CECNKyGoRq95g9iF+yQE1bCpVJdl6SvU3FSoeUzZk09Dcr3ZK1vMshpMDJ/88+vIm1QyCQnfIABx22u+Roc4M1ALV0LQvyqUdu/wEJkDxltzb4mdOfB9pfX1nTZJdT77+ZYOh1krbmcmIeF+AhC3NhVqGsQ2YLvfXcVNF6NMpzMfhHIEyQPGT20q1KyurEw4+LSiskUyq8'+
			'HE8MB/dyirQHAPAYiI+NhVKfusl2e6wTWjxhfteYWaLM9QoeZcB46Z1/2mrPDyuU1SnXd3tRZP/i6e+2omVCMA8am+Qk1L8A0oX+TZq0DnyfVYoEqTN7NrJVxWJp4llhwSay1C8sGn31pdG5I+I2K+YR6qEoD4qNLZGufJ9ZiuIblel1yP5Roq1JzbwHGTWOu91td36pPqfLO1ePKE0sZODPiaAMSXrpPrdcn1mK7XyfUyD3JkwcqAMbuRy2xaYievTERY/flKCRFZ77U+5N2qtINRY35hHqoTgPhS9iC2S67HRJUVxNRzWcxc8ghDhZpzGTimHnwamh/c5TLyGkwM3/sFZYUoq8PhJqkOLIYAxGfKIDazrWyXWIvpu06u5x0yHqQMGLMPRn0x9ZfIyyTBJrHk69Jdj89tkuo8prV4VhA9nds7bVCbAMRdMjv/ZB0W'+
			'xzzsx74AmjZUqDn1VaCLyG193SfWWoSKB59m/trvmfp9DEclAHEXs38cSttcxnQV+QejTv0l8j6x1hsHn96pT6pzZ+vr+yR3OJzNO21wDAIQdzGI5VDZ4dkWOB6sbN3Kfo/xJCZ6qPO6W11E7iq7d3++UEJD1s/4kJ/vkPTZEVb34CMBCJiyKc+8M039TGpmyNzW9H6732WHxyXok+p8s/X1fZJbYp9N/Z02OBYBCIDFKNuGsltin05t+1AZyGa2iu8Tay3Culs9j7yf8VNW1zJX5vrEWjBbAhAAS9NXqDm1l8j7xFofIn/r4BJk/p4Ph/6HyS2xX1oFAgGIu3VjXwAU12NfAPNTtg0ttiV28qGcERGD1tefSz5c9jGtr++TuQq0SawFsyQAcZdu7Atgts7HvgAo+go1p7IKlHkoZ4TmB3fZJNYaJlLj1uXEOxtCdQ'+
			'IQd8nsvJXdkpZp86XKVLyO5bbE3iTWylidWJTye5wVdh/V+vo+yS2xJ9vZEI5FAOIzZdk/c2ZRS+22nCfXc/9wkLKlK3tlY/SBY/KhnBF1Do+du03kfQ9m3oNDYq0+sRbMzg9jXwCTc55cz77yRpRZ02eZNb2XwBMNEfFTcs0+xg0Nm8RaKasTC5S1+nNQ6+v7bPe763W3ehc5z9nTdbfaZF4fudbd6nrsa8iw3e/Ox76GuwhAfCl7dtMMfjuy753sVsY0Zrvf7dfd6lXkvcwecTNwvBjjzJzSijuz9bV3f76QvMJW4+d7FRG/JdXahBXAKcv8s84XbIHjozKD/yK5rADUjk1yvX1yPdo0VKg5VjOETWKt1NWJBdkk1hoSa0VEekvss6mdbwXHIgDxqRpf6gJQAyrMTEe4d0hQtnhlryaeHbsldnJb5girP19Jfo7V'+
			'bC6R+Xs3lc6GcFQCEBGR3vXm1nvdhZrRV6h5XaEmbRoq1Owr1PyWTXI9Aehrkzj49Mi1J3O+FRyTAMStIXK7v0U4WbwJ6251EfmrP++3+50VIFKUbUPZB6NeHLkldubg/JUGI58rISBrC3jV5hLJLbEjdISjQQIQty99Zr/7E2EGf/HKoGGoUFp4JtuQXO8k8ldl7lSe0Q4+ratPrHWMn++QWOvYYR5GJwA1bt2tnkdeR5lPfRijSxLHU74wX0f+ymGEzkTku4r8g1GP9f5En1jrjdXVz5VnWVYXy6M0lygrTO+Syp2Ed4FojADUsPLC53Wl8kOlukxAGTBcR/K5P4Xtb6QrW76yJ2VOyxbQaspzOvPgU6s/X7uMaR58eszPEoBoigDUqHW3uoyIf0ed2fsIX7KLVVYNr6NO+ImwH516+go1aw8cM+u/tzJ/p7k0P/'+
			'hMckvsk7LVEpogADVm3a26dbd6HRG/VPyYmu0/GVEJztdRL/x8CO//UEl5Ls2mJXbyi/kRJqa+kvx+1RjffZm/p31iLZg0AagR627147pb9XFztkqNhgef6ivX58jW3ep83a2u4yY411o1jIi40p2KyvqZ1Myu+yFsTb5Ln1hrSKw1xmdW39IJUyEALdy6W12su9UQEf8dET9F3cFrhNWfxSihebPuVm/jZrtkdqvrL73f7nd95c+gceXl8cm3xE5+MT8i4rXJhc8lv19VtfX1fSq0xPYuEE34YewLIFd5oD+PiPPyV+3A86kP4eE5a1/cP7VXCr+0OfLn0a4+crtf3nbR6hNrbiL3+d0n1lqKPrHWmNsLh4h4mVTrbN2tnmtEw9IJQHV0ZbvZMTyPiB8joovcTkGH2JhhfLoSQmr6MW7um1vn5d/Veq/nIX4dY/aU'+
			'Zr2OmwFrZsDYRO6AOnMy6Xcr858rzVyyVrWP0vr6Ptv97nrdrd5F3jP8MkxIsXACUB2ncbPdrCW/6y6U5t9jX8CRvQ+z0xzRdr/7Y92triL3OX267labjIFweTFf6+u6MgPmFH6+V5G3qvly3a16oZklE4DI8C7MFnGYDxFxYeWQEQyRP1G1iZyX0jcJNW69t7r6udJdL2vLWMQEmkts97uhhPqsVc3LsKV9bH8f+wKWTADiqT6ErW8cbmOvOWPY7nf7dbd6FbkD4Se/P5G8NSvC6updNom1ptT4J3NVc1NWgXy3j8TERV26wPEUHyLi3ACWA/3DtklGNlSo+dRZ88xZd+dqfaF015vlwacPMCTWum3sAYskAHEo4Yen+MeYLw1DxMcZ1uyDUV8e2hK7/HeZK1LO1fraJvK2iY3S+vo+FVpibxJrwaQIQBxC+OFQH0'+
			'L4YVqGCjUPnTnPnnEfkustwdKaH3xpSKx1WhpywOIIQDzWuxB+OMz7uLl3hrEvBG6V+zH7YNTNgf9d5uB8Su+mTEJyd71Jbi+ssKppGxyLJADxGK9C+OEwv0eEw/WYqiG53qNnzsuvzzyXaEistRSbxFrDhLcXDom1nh3hbDo4OgGIh/gQEf97u9/p9sZj3d47Wl0zZTW2Mm0e+eszZ9rfTOndlCkog/jM7npT3P4WEVVWNfvEWjAJAhDf8yoiOt26OMCv4d5hBko4z3x5PKK0xH7ILyyD82eJnz0k1lqKzID5+wy2Fw6Jtc7K2UmwGAIQ93kTEf9p1YcDvIqI1Xa/u3TvMCN9hZoPHXRnDs7fe8/uc2Xw/iKx5GRXfz6RfY19cj0YlQDEl15FxN+3+513fXiM93Gz4rMqoXk/8vXAo5R7tkZL7O5bv6DC4HxIrLUU'+
			'fWKt93PYXlhhVfPg9u4wRQIQETeD15/jr8Hr9cjXwzz1gg8zN8a7QNldtuawOnE0ZdB+kViyT6xVW/a9oCMciyEAtetd3MzY/+d2v+u2+53BK09xGgZezFx5Xy27Jfa9g8YyON8kftYr206/chl53fUm2fr6PmUXR2pLbKtALIUA1I7bwPOPuFnpeV7e0bDNjSwv190qc6YVxtAn1zv5Rkvsi8htfd0n1lqKzFWLKbe+vs+QWOskclfTYDQ/jH0BpHkXEbcP5rfln99GxF7ImZ3s9xDu80dEPI+8gwEjIoZ1t3puNZEZex03q5mZweQy7h6I9omf8cafu89VOFtpdqvc2/1uWHerPvKe8314z4wFEIDqeLPd787Hvgjm6Zj3Tmm/++/Ekidx8+V4nlgTjma73/2x7lZDRPwzseyzdbc6//T9yrJamjn5MLvB+RH0ib'+
			'Xm0Pr6PkNE/JRU63TdrTY6DTJ3tsBBw8qA7NfksmfrbuVlWebsGM0Qsltfz+bdlGMokzsC5o3sa98k14OjE4CAPm62UGb65aGHQMLUlJn+7INRP7bELn8/S6zdJ9Zaij6x1ixaX9+nQkvssxIwYbYEIGhc+XLcVCg9VKgJxzJUqLkpf+8Ta86qM9kxlMkXAfNzVoHgEwIQcNsu9efkss/W3WrO20ZoWJnxz14ZvW0j/DKx5hw7k9WWub1wEQGzQkvs7x7yC1MmAAEREbHd7/rI70D3T1slmLHsAH8SEdfJNU0yfKIMygXMuw3J9frkenA0AhDwqU3czHhmGhyexxyVTlfZB6M+S6w1585ktWyS6y0mYFa4ny8825krAQj4qAymsju4nYb3gZivYewL+IbFDM4zlMF45vNriQFzSKx1EvnfF3AUAhDwmTJL+Hty2Rfl'+
			'3BOYm6mGjHdz7kxWySYaP/j0AbL/nwQgZkkAAu6yiTpb4brkmlBVhRbCWZY4OH+q7LOVrhPrTUKF+/lk3a02ifXgKAQg4CuVWmOfxLS3E8F9+rEv4AsfykotRRmEZx582ifWmprs8Nwn14PqBCDgTuVk+V+Ty56tu5UtE8xKeQ8ku0PiU1j9+domsdYiWl/fp0JL7FPdPpkbAQj4lj7yu2D9Ug4qhDmZUugYxr6AKSmD78yDT5fU+vo+Q3K9PrkeVPXD2BcATNd2v/ujNC/4r+TSQ0QIQczGdr97ve5W7yN3m9UhXi2wM9lTZa8qTynsVrHd74Z1t+oj734+W3er52V1iQTl96cFwxjPNAEI+Kbtfvd23a1+joifEss+W3erq+1+Zzscc9JHxG8jX8PiB+ePURqrvEgsucTW1/cZIve5fhn57462LPP3ZsquI2J/7A'+
			'+1BQ74ru1+10fEu+Sy/7RvnJl5HfndER/jjRn2r/TJ9VoKmNn/ry91+mQuBCDgoS6iTmtsJ4kzC+W9kGHESxjzsyenPDsyzxdbZOvr+1Rq8W5Vn1kQgIAHKdtC+uSyp2FQx7yMtULwXuvrr1xG7sGnfWKtuci+nzcmtZgDAQh4sO1+dxX57YBflEYLMHllImCMg1Fb2pr1UJmrDYtufX2fCi2xT8J7QMyAAAQ8Vq2tcF1yTahlOPLnfRjhMyetHHyaufrTQuvr+wzJ9WyDY/IEIOBRyiBhk1z2JAzwmInynkh2U5Bved3w4Pw+fXK9ZlfYytbKzPPeTktAhckSgIBH2+53ryN/G9DZuluZOWQujjlg7o/4WZNXukdmnsfUUuvr+wzJ9TzLmTQBCDjUZeTOGkZE/LLuVg5IZfIqzJrf543B+Vf65HrNrv58Ivtn8Mwx'+
			'B0yZAAQcpNJWuAitsZmP4Qif0R/hM2ajTJCcJZZsqvX1fSq1xO6T60EaAQg4WBk4/Jxc9ln44mQeaq8cGJx/LXtrVZ9cb86y7+czzW2YKgEIeJLtftdH/gvh/7R9gqmrNGv+qb5i7dkpg+mXiSWbbH19nwotsSPcw0yUAARk2FSo+dpWOGagr1TX4Pxrm+R6Lbe+vs+QXO+l5zhTJAABT1ZmDv+VXFZrbCavNCjInjWPiLgyOP9LGURnb3/T/OALlZp76AjH5AhAQIrtfncV+QPBF86TYAZqDKSHCjXnbBO5B59qfX2/IbnepVUgpkYAAjJt4mbrTqYrL9IyZeVcrMxZ81cG51+x+nM8V5H7HD+JiIvEevBkf/vzzz/HvgYAAICjsAIEAAA0QwACAACaIQABAADNEIAAAIBmCEAAAEAzBCAAAKAZAhAAANAMAQgAAG'+
			'iGAAQAADRDAAIAAJohAAEAAM0QgAAAgGYIQAAAQDMEIAAAoBkCEAAA0AwBCAAAaIYABAAANEMAAgAAmiEAAQAAzRCAAACAZghAAABAMwQgAACgGQIQAADQDAEIAABohgAEAAA0QwACAACaIQABAADNEIAAAIBmCEAAAEAzBCAAAKAZAhAAANAMAQgAAGiGAAQAADRDAAIAAJohAAEAAM0QgAAAgGYIQAAAQDMEIAAAoBkCEAAA0AwBCAAAaIYABAAANEMAAgAAmiEAAQAAzRCAAACAZghAAABAMwQgAACgGQIQAADQDAEIAABohgAEAAA0QwACAACaIQABAADNEIAAAIBmCEAAAEAzBCAAAKAZAhAAANAMAQgAAGjG/wfgFz+sQ7ub7wAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 69px;';
		hs+='position : absolute;';
		hs+='right : 31px;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 233px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 0%';
		me._image_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_2);
		el=me._screentint_phone=document.createElement('div');
		el.ggId="screentint_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(3px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnails_phone') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._screentint_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._screentint_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._screentint_phone.style.transition='opacity 300ms ease 0ms';
				if (me._screentint_phone.ggCurrentLogicStateAlpha == 0) {
					me._screentint_phone.style.visibility=me._screentint_phone.ggVisible?'inherit':'hidden';
					me._screentint_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._screentint_phone.style.opacity == 0.0) { me._screentint_phone.style.visibility="hidden"; } }, 305);
					me._screentint_phone.style.opacity=0;
				}
			}
		}
		me._screentint_phone.logicBlock_alpha();
		me._screentint_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone1=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_popup_phone1.onclick=function (e) {
			player.setVariableValue('vis_thumbnails_phone', false);
		}
		me._close_popup_phone1.onmouseenter=function (e) {
			me.elementMouseOver['close_popup_phone1']=true;
			me._btn_close_popup_phone1.logicBlock_visible();
		}
		me._close_popup_phone1.onmouseleave=function (e) {
			me.elementMouseOver['close_popup_phone1']=false;
			me._btn_close_popup_phone1.logicBlock_visible();
		}
		me._close_popup_phone1.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_close_popup_phone1=document.createElement('div');
		els=me._btn_close_popup_phone1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2MyZTgxMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB5MT0iOCIgeTI9IjI0IiB4MT0iMjQiIHgyPSI4IiBjbGFzcz0ic3QwIi8+CiA8bGluZSB5MT0iOCIgeTI9IjI0IiB4MT0iOCIgeDI9IjI0IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_close_popup_phone1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM2IDM2OyIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB5MT0iOSIgeTI9IjI3IiB4MT0iMjciIHgyPSI5IiBjbGFzcz0ic3QwIi8+CiA8bGluZSB5MT0iOSIgeTI9IjI3IiB4MT0iOSIgeDI9IjI3IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_popup_phone1'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_close_popup_phone1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_close_popup_phone1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_close_popup_phone1.style.transition='';
				if (me._btn_close_popup_phone1.ggCurrentLogicStateVisible == 0) {
					me._btn_close_popup_phone1.style.visibility="hidden";
					me._btn_close_popup_phone1.ggVisible=false;
				}
				else {
					me._btn_close_popup_phone1.style.visibility=(Number(me._btn_close_popup_phone1.style.opacity)>0||!me._btn_close_popup_phone1.style.opacity)?'inherit':'hidden';
					me._btn_close_popup_phone1.ggVisible=true;
				}
			}
		}
		me._btn_close_popup_phone1.logicBlock_visible();
		me._btn_close_popup_phone1.onmouseenter=function (e) {
			me._btn_close_popup_phone1__img.style.visibility='hidden';
			me._btn_close_popup_phone1__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_close_popup_phone1']=true;
		}
		me._btn_close_popup_phone1.onmouseleave=function (e) {
			me._btn_close_popup_phone1__img.style.visibility='inherit';
			me._btn_close_popup_phone1__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_close_popup_phone1']=false;
		}
		me._btn_close_popup_phone1.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone1.appendChild(me._btn_close_popup_phone1);
		me._screentint_phone.appendChild(me._close_popup_phone1);
		el=me._thumbnail_scroller_phone1=document.createElement('div');
		els=me._thumbnail_scroller_phone1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 99px;';
		hs+='left : 50%;';
		hs+='margin-left : -82.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 165px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_scroller_phone1.ggScrollByX = function(diffX) {
			if(!me._thumbnail_scroller_phone1.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone1.ggHPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone1.ggScrollPosX = (me._thumbnail_scroller_phone1__horScrollFg.offsetLeft + diffX);
			me._thumbnail_scroller_phone1.ggScrollPosX = Math.max(me._thumbnail_scroller_phone1.ggScrollPosX, 0);
			me._thumbnail_scroller_phone1.ggScrollPosX = Math.min(me._thumbnail_scroller_phone1.ggScrollPosX, me._thumbnail_scroller_phone1__horScrollBg.offsetWidth - me._thumbnail_scroller_phone1__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone1__horScrollFg.style.left = me._thumbnail_scroller_phone1.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone1.ggScrollPosX / (me._thumbnail_scroller_phone1__horScrollBg.offsetWidth - me._thumbnail_scroller_phone1__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone1__content.style.left = -(Math.round((me._thumbnail_scroller_phone1.ggContentWidth * (1.0 - me._thumbnail_scroller_phone1.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone1.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone1.ggScrollPosXPercent = (me._thumbnail_scroller_phone1__horScrollFg.offsetLeft / me._thumbnail_scroller_phone1__horScrollBg.offsetWidth);
		}
		me._thumbnail_scroller_phone1.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_scroller_phone1.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_scroller_phone1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_scroller_phone1.ggScrollPosX >= me._thumbnail_scroller_phone1__horScrollBg.offsetWidth - me._thumbnail_scroller_phone1__horScrollFg.offsetWidth)) {
					me._thumbnail_scroller_phone1.ggScrollPosX = Math.min(me._thumbnail_scroller_phone1.ggScrollPosX, me._thumbnail_scroller_phone1__horScrollBg.offsetWidth - me._thumbnail_scroller_phone1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_scroller_phone1.ggScrollPosX <= 0)) {
					me._thumbnail_scroller_phone1.ggScrollPosX = Math.max(me._thumbnail_scroller_phone1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone1__horScrollFg.style.left = me._thumbnail_scroller_phone1.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone1.ggScrollPosX / (me._thumbnail_scroller_phone1__horScrollBg.offsetWidth - me._thumbnail_scroller_phone1__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone1__content.style.left = -(Math.round((me._thumbnail_scroller_phone1.ggContentWidth * (1.0 - me._thumbnail_scroller_phone1.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone1.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone1.ggScrollPosXPercent = (me._thumbnail_scroller_phone1__horScrollFg.offsetLeft / me._thumbnail_scroller_phone1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_scroller_phone1.ggScrollByY = function(diffY) {
			if(!me._thumbnail_scroller_phone1.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone1.ggVPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone1.ggScrollPosY = (me._thumbnail_scroller_phone1__vertScrollFg.offsetTop + diffY);
			me._thumbnail_scroller_phone1.ggScrollPosY = Math.max(me._thumbnail_scroller_phone1.ggScrollPosY, 0);
			me._thumbnail_scroller_phone1.ggScrollPosY = Math.min(me._thumbnail_scroller_phone1.ggScrollPosY, me._thumbnail_scroller_phone1__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone1__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone1__vertScrollFg.style.top = me._thumbnail_scroller_phone1.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone1.ggScrollPosY / (me._thumbnail_scroller_phone1__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone1__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone1__content.style.top = -(Math.round((me._thumbnail_scroller_phone1.ggContentHeight * (1.0 - me._thumbnail_scroller_phone1.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone1.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone1.ggScrollPosYPercent = (me._thumbnail_scroller_phone1__vertScrollFg.offsetTop / me._thumbnail_scroller_phone1__vertScrollBg.offsetHeight);
		}
		me._thumbnail_scroller_phone1.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_scroller_phone1.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_scroller_phone1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_scroller_phone1.ggScrollPosY >= me._thumbnail_scroller_phone1__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone1__vertScrollFg.offsetHeight)) {
					me._thumbnail_scroller_phone1.ggScrollPosY = Math.min(me._thumbnail_scroller_phone1.ggScrollPosY, me._thumbnail_scroller_phone1__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_scroller_phone1.ggScrollPosY <= 0)) {
					me._thumbnail_scroller_phone1.ggScrollPosY = Math.max(me._thumbnail_scroller_phone1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone1__vertScrollFg.style.top = me._thumbnail_scroller_phone1.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone1.ggScrollPosY / (me._thumbnail_scroller_phone1__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone1__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone1__content.style.top = -(Math.round((me._thumbnail_scroller_phone1.ggContentHeight * (1.0 - me._thumbnail_scroller_phone1.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone1.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone1.ggScrollPosYPercent = (me._thumbnail_scroller_phone1__vertScrollFg.offsetTop / me._thumbnail_scroller_phone1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_scroller_phone1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_scroller_phone1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_scroller_phone1.ggHPercentVisible);
					me._thumbnail_scroller_phone1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_scroller_phone1.clientWidth - (me._thumbnail_scroller_phone1.ggVertScrollVisible ? 8 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_scroller_phone1.clientWidth - (me._thumbnail_scroller_phone1.ggVertScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone1.ggHPercentVisible);
					me._thumbnail_scroller_phone1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_scroller_phone1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_scroller_phone1.ggVPercentVisible);
					me._thumbnail_scroller_phone1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_scroller_phone1.clientHeight - (me._thumbnail_scroller_phone1.ggHorScrollVisible ? 8 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_scroller_phone1.clientHeight - (me._thumbnail_scroller_phone1.ggHorScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone1.ggVPercentVisible);
					me._thumbnail_scroller_phone1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_scroller_phone1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_scroller_phone1.ggDragInertiaX *= 0.96;
				me._thumbnail_scroller_phone1.ggDragInertiaY *= 0.96;
				me._thumbnail_scroller_phone1.ggScrollByX(me._thumbnail_scroller_phone1.ggDragInertiaX);
				me._thumbnail_scroller_phone1.ggScrollByY(me._thumbnail_scroller_phone1.ggDragInertiaY);
				if (Math.abs(me._thumbnail_scroller_phone1.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_scroller_phone1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnail_scroller_phone1__content.onmouseup = null;
			me._thumbnail_scroller_phone1__content.onmousemove = null;
			me._thumbnail_scroller_phone1__content.ontouchend = null;
			me._thumbnail_scroller_phone1__content.ontouchmove = null;
			me._thumbnail_scroller_phone1__content.onpointerup = null;
			me._thumbnail_scroller_phone1__content.onpointermove = null;
			setTimeout(function() { me._thumbnail_scroller_phone1.ggIsDragging = false; }, 100);
		}
		me._thumbnail_scroller_phone1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_scroller_phone1.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_scroller_phone1.ggDragStartY) > 10) me._thumbnail_scroller_phone1.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_scroller_phone1.ggDragLastX) * me._thumbnail_scroller_phone1.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_scroller_phone1.ggDragLastY) * me._thumbnail_scroller_phone1.ggVPercentVisible;
			me._thumbnail_scroller_phone1.ggDragInertiaX = -diffX;
			me._thumbnail_scroller_phone1.ggDragInertiaY = -diffY;
			me._thumbnail_scroller_phone1.ggDragLastX = eventX;
			me._thumbnail_scroller_phone1.ggDragLastY = eventY;
			me._thumbnail_scroller_phone1.ggScrollByX(-diffX);
			me._thumbnail_scroller_phone1.ggScrollByY(-diffY);
		}
		me._thumbnail_scroller_phone1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_scroller_phone1.ggDragLastX = me._thumbnail_scroller_phone1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_scroller_phone1.ggDragLastY = me._thumbnail_scroller_phone1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_scroller_phone1__content.onmouseup = me._thumbnail_scroller_phone1__content.mousetouchend;
			me._thumbnail_scroller_phone1__content.ontouchend = me._thumbnail_scroller_phone1__content.mousetouchend;
			me._thumbnail_scroller_phone1__content.onmousemove = me._thumbnail_scroller_phone1__content.mousetouchmove;
			me._thumbnail_scroller_phone1__content.ontouchmove = me._thumbnail_scroller_phone1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_scroller_phone1__content.onpointerup = me._thumbnail_scroller_phone1__content.ontouchend;
				me._thumbnail_scroller_phone1__content.onpointermove = me._thumbnail_scroller_phone1__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnail_scroller_phone1__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_scroller_phone1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_scroller_phone1__content.mousetouchstart;
		}
		elVertScrollBg = me._thumbnail_scroller_phone1__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnail_scroller_phone1__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnail_scroller_phone1.ggScrollPosY = 0;
		me._thumbnail_scroller_phone1.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_scroller_phone1.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone1.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone1.ggScrollByY(me._thumbnail_scroller_phone1.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnail_scroller_phone1.ggDragLastY;
				me._thumbnail_scroller_phone1.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone1.ggDragLastY = e.clientY;
				me._thumbnail_scroller_phone1.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_scroller_phone1.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone1.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone1.ggScrollByY(me._thumbnail_scroller_phone1.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnail_scroller_phone1.ggDragLastY;
				me._thumbnail_scroller_phone1.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone1.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_scroller_phone1.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnail_scroller_phone1.ggScrollHeight;
			if (e.offsetY < me._thumbnail_scroller_phone1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone1.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_scroller_phone1__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnail_scroller_phone1.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnail_scroller_phone1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone1.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnail_scroller_phone1.ggScrollByYSmooth(30 * me._thumbnail_scroller_phone1.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_scroller_phone1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 8px; height: 8px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_scroller_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 50px);';
		hs+='left : 20px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_phone1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_phone1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 8;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (8/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbnail_scroller_phone1.ggScrollPosY / me._thumbnail_scroller_phone1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbnail_scroller_phone1.ggHorScrollVisible && contentHeight > this.clientHeight - 8) || (!me._thumbnail_scroller_phone1.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnail_scroller_phone1__vertScrollBg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone1__vertScrollFg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone1.ggVertScrollVisible = true;
				} else {
					me._thumbnail_scroller_phone1__vertScrollBg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone1__vertScrollFg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone1.ggVertScrollVisible = false;
				}
				if(me._thumbnail_scroller_phone1.ggVertScrollVisible) {
					me._thumbnail_scroller_phone1.ggAvailableWidth = me._thumbnail_scroller_phone1.clientWidth - 8;
					if (me._thumbnail_scroller_phone1.ggHorScrollVisible) {
						me._thumbnail_scroller_phone1.ggAvailableHeight = me._thumbnail_scroller_phone1.clientHeight - 8;
						me._thumbnail_scroller_phone1.ggAvailableHeightWithScale = me._thumbnail_scroller_phone1.getBoundingClientRect().height - me._thumbnail_scroller_phone1__vertScrollBg.getBoundingClientRect().width;
						me._thumbnail_scroller_phone1__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnail_scroller_phone1.ggAvailableHeight = me._thumbnail_scroller_phone1.clientHeight;
						me._thumbnail_scroller_phone1.ggAvailableHeightWithScale = me._thumbnail_scroller_phone1.getBoundingClientRect().height;
						me._thumbnail_scroller_phone1__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnail_scroller_phone1__vertScrollBg.style.height = me._thumbnail_scroller_phone1.ggAvailableHeight + 'px';
					me._thumbnail_scroller_phone1.ggVPercentVisible = contentHeight != 0 ? me._thumbnail_scroller_phone1.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnail_scroller_phone1.ggVPercentVisible > 1.0) me._thumbnail_scroller_phone1.ggVPercentVisible = 1.0;
					me._thumbnail_scroller_phone1.ggScrollHeight =  Math.round(me._thumbnail_scroller_phone1__vertScrollBg.offsetHeight * me._thumbnail_scroller_phone1.ggVPercentVisible);
					me._thumbnail_scroller_phone1__vertScrollFg.style.height = me._thumbnail_scroller_phone1.ggScrollHeight + 'px';
					me._thumbnail_scroller_phone1.ggScrollPosY = me._thumbnail_scroller_phone1.ggScrollPosYPercent * me._thumbnail_scroller_phone1.ggAvailableHeight;
					me._thumbnail_scroller_phone1.ggScrollPosY = Math.min(me._thumbnail_scroller_phone1.ggScrollPosY, me._thumbnail_scroller_phone1__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone1__vertScrollFg.offsetHeight);
					me._thumbnail_scroller_phone1__vertScrollFg.style.top = me._thumbnail_scroller_phone1.ggScrollPosY + 'px';
					if (me._thumbnail_scroller_phone1.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_scroller_phone1.ggScrollPosY / (me._thumbnail_scroller_phone1__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone1__vertScrollFg.offsetHeight);
						me._thumbnail_scroller_phone1__content.style.top = -(Math.round((me._thumbnail_scroller_phone1.ggContentHeight * (1.0 - me._thumbnail_scroller_phone1.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone1.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnail_scroller_phone1.ggAvailableWidth = me._thumbnail_scroller_phone1.clientWidth;
					me._thumbnail_scroller_phone1.ggScrollPosY = 0;
					me._thumbnail_scroller_phone1.ggScrollPosYPercent = 0.0;
					me._thumbnail_scroller_phone1__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnail_scroller_phone1__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnail_scroller_phone1.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_scroller_phone1.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_scroller_phone1);
					me._thumbnail_scroller_phone1.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner_phone1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_phone1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 166;
		el.ggHeight = 100;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner_phone1.ggUpdating == true) return;
			me._node_cloner_phone1.ggUpdating = true;
			var el=me._node_cloner_phone1;
			var curNumCols = 0;
			var parentWidth = me._node_cloner_phone1.parentNode.classList.contains('ggskin_subelement') ? (me._node_cloner_phone1.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._node_cloner_phone1.parentNode.parentNode.ggAvailableWidth : me._node_cloner_phone1.parentNode.parentNode.clientWidth) : me._node_cloner_phone1.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._node_cloner_phone1.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._node_cloner_phone1.offsetLeft) * me._node_cloner_phone1.ggNumRepeat / 100.0) / me._node_cloner_phone1.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner_phone1.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner_phone1.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._node_cloner_phone1.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner_phone1.getFilteredNodes(tourNodes, filter);
			me._node_cloner_phone1.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner_phone1.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner_phone1.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner_phone1.ggWidth) + 'px';
				parameter.width=me._node_cloner_phone1.ggWidth + 'px';
				parameter.height=me._node_cloner_phone1.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_phone1_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._node_cloner_phone1.ggNodeCount = me._node_cloner_phone1.ggNumFilterPassed;
			me._node_cloner_phone1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner_phone1.parentNode && me._node_cloner_phone1.parentNode.classList.contains('ggskin_subelement') && me._node_cloner_phone1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner_phone1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="node_cloner_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 166px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner_phone1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner_phone1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner_phone1.childNodes.length; i++) {
				var child=me._node_cloner_phone1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner_phone1.ggUpdatePosition=function (useTransition) {
			me._node_cloner_phone1.ggUpdate();
		}
		me._thumbnail_scroller_phone1__content.appendChild(me._node_cloner_phone1);
		me._screentint_phone.appendChild(me._thumbnail_scroller_phone1);
		me.divSkin.appendChild(me._screentint_phone);
		el=me._thumbnail_menu_code_1=document.createElement('div');
		el.ggId="thumbnail_menu_code_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu_code_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu_code_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._thumbnail_menu_code_1);
		el=me._thumbnail_menu_phone=document.createElement('div');
		el.ggId="thumbnail_menu_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -252px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -264px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(3px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu_phone') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu_phone.style.transition='opacity 300ms ease 0ms';
				if (me._thumbnail_menu_phone.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_menu_phone.style.visibility=me._thumbnail_menu_phone.ggVisible?'inherit':'hidden';
					me._thumbnail_menu_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_menu_phone.style.opacity == 0.0) { me._thumbnail_menu_phone.style.visibility="hidden"; } }, 305);
					me._thumbnail_menu_phone.style.opacity=0;
				}
			}
		}
		me._thumbnail_menu_phone.logicBlock_alpha();
		me._thumbnail_menu_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone0=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_popup_phone0.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu_phone', false);
		}
		me._close_popup_phone0.onmouseenter=function (e) {
			me.elementMouseOver['close_popup_phone0']=true;
			me._btn_close_popup_phone0.logicBlock_visible();
			me._btn_close_popup_phone_active.logicBlock_visible();
		}
		me._close_popup_phone0.onmouseleave=function (e) {
			me.elementMouseOver['close_popup_phone0']=false;
			me._btn_close_popup_phone0.logicBlock_visible();
			me._btn_close_popup_phone_active.logicBlock_visible();
		}
		me._close_popup_phone0.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_close_popup_phone0=document.createElement('div');
		els=me._btn_close_popup_phone0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzE0ZDljYztzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB5MT0iOCIgeTI9IjI0IiB4MT0iMjQiIHgyPSI4IiBjbGFzcz0ic3QwIi8+CiA8bGluZSB5MT0iOCIgeTI9IjI0IiB4MT0iOCIgeDI9IjI0IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_popup_phone0'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_close_popup_phone0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_close_popup_phone0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_close_popup_phone0.style.transition='';
				if (me._btn_close_popup_phone0.ggCurrentLogicStateVisible == 0) {
					me._btn_close_popup_phone0.style.visibility="hidden";
					me._btn_close_popup_phone0.ggVisible=false;
				}
				else {
					me._btn_close_popup_phone0.style.visibility=(Number(me._btn_close_popup_phone0.style.opacity)>0||!me._btn_close_popup_phone0.style.opacity)?'inherit':'hidden';
					me._btn_close_popup_phone0.ggVisible=true;
				}
			}
		}
		me._btn_close_popup_phone0.logicBlock_visible();
		me._btn_close_popup_phone0.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone0.appendChild(me._btn_close_popup_phone0);
		el=me._btn_close_popup_phone_active=document.createElement('div');
		els=me._btn_close_popup_phone_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB5MT0iOCIgeTI9IjI0IiB4MT0iMjQiIHgyPSI4IiBjbGFzcz0ic3QwIi8+CiA8bGluZSB5MT0iOCIgeTI9IjI0IiB4MT0iOCIgeDI9IjI0IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_close_popup_phone_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_popup_phone0'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_close_popup_phone_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_close_popup_phone_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_close_popup_phone_active.style.transition='';
				if (me._btn_close_popup_phone_active.ggCurrentLogicStateVisible == 0) {
					me._btn_close_popup_phone_active.style.visibility=(Number(me._btn_close_popup_phone_active.style.opacity)>0||!me._btn_close_popup_phone_active.style.opacity)?'inherit':'hidden';
					me._btn_close_popup_phone_active.ggVisible=true;
				}
				else {
					me._btn_close_popup_phone_active.style.visibility="hidden";
					me._btn_close_popup_phone_active.ggVisible=false;
				}
			}
		}
		me._btn_close_popup_phone_active.logicBlock_visible();
		me._btn_close_popup_phone_active.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone0.appendChild(me._btn_close_popup_phone_active);
		me._thumbnail_menu_phone.appendChild(me._close_popup_phone0);
		el=me._thumbnail_scroller_phone0=document.createElement('div');
		els=me._thumbnail_scroller_phone0__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 129px;';
		hs+='left : 50%;';
		hs+='margin-left : -59.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 119px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_scroller_phone0.ggScrollByX = function(diffX) {
			if(!me._thumbnail_scroller_phone0.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone0.ggHPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone0.ggScrollPosX = (me._thumbnail_scroller_phone0__horScrollFg.offsetLeft + diffX);
			me._thumbnail_scroller_phone0.ggScrollPosX = Math.max(me._thumbnail_scroller_phone0.ggScrollPosX, 0);
			me._thumbnail_scroller_phone0.ggScrollPosX = Math.min(me._thumbnail_scroller_phone0.ggScrollPosX, me._thumbnail_scroller_phone0__horScrollBg.offsetWidth - me._thumbnail_scroller_phone0__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone0__horScrollFg.style.left = me._thumbnail_scroller_phone0.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone0.ggScrollPosX / (me._thumbnail_scroller_phone0__horScrollBg.offsetWidth - me._thumbnail_scroller_phone0__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone0__content.style.left = -(Math.round((me._thumbnail_scroller_phone0.ggContentWidth * (1.0 - me._thumbnail_scroller_phone0.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone0.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone0.ggScrollPosXPercent = (me._thumbnail_scroller_phone0__horScrollFg.offsetLeft / me._thumbnail_scroller_phone0__horScrollBg.offsetWidth);
		}
		me._thumbnail_scroller_phone0.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_scroller_phone0.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone0.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_scroller_phone0.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_scroller_phone0.ggScrollPosX >= me._thumbnail_scroller_phone0__horScrollBg.offsetWidth - me._thumbnail_scroller_phone0__horScrollFg.offsetWidth)) {
					me._thumbnail_scroller_phone0.ggScrollPosX = Math.min(me._thumbnail_scroller_phone0.ggScrollPosX, me._thumbnail_scroller_phone0__horScrollBg.offsetWidth - me._thumbnail_scroller_phone0__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_scroller_phone0.ggScrollPosX <= 0)) {
					me._thumbnail_scroller_phone0.ggScrollPosX = Math.max(me._thumbnail_scroller_phone0.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone0__horScrollFg.style.left = me._thumbnail_scroller_phone0.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone0.ggScrollPosX / (me._thumbnail_scroller_phone0__horScrollBg.offsetWidth - me._thumbnail_scroller_phone0__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone0__content.style.left = -(Math.round((me._thumbnail_scroller_phone0.ggContentWidth * (1.0 - me._thumbnail_scroller_phone0.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone0.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone0.ggScrollPosXPercent = (me._thumbnail_scroller_phone0__horScrollFg.offsetLeft / me._thumbnail_scroller_phone0__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_scroller_phone0.ggScrollByY = function(diffY) {
			if(!me._thumbnail_scroller_phone0.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone0.ggVPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone0.ggScrollPosY = (me._thumbnail_scroller_phone0__vertScrollFg.offsetTop + diffY);
			me._thumbnail_scroller_phone0.ggScrollPosY = Math.max(me._thumbnail_scroller_phone0.ggScrollPosY, 0);
			me._thumbnail_scroller_phone0.ggScrollPosY = Math.min(me._thumbnail_scroller_phone0.ggScrollPosY, me._thumbnail_scroller_phone0__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone0__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone0__vertScrollFg.style.top = me._thumbnail_scroller_phone0.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone0.ggScrollPosY / (me._thumbnail_scroller_phone0__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone0__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone0__content.style.top = -(Math.round((me._thumbnail_scroller_phone0.ggContentHeight * (1.0 - me._thumbnail_scroller_phone0.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone0.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone0.ggScrollPosYPercent = (me._thumbnail_scroller_phone0__vertScrollFg.offsetTop / me._thumbnail_scroller_phone0__vertScrollBg.offsetHeight);
		}
		me._thumbnail_scroller_phone0.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_scroller_phone0.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone0.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_scroller_phone0.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_scroller_phone0.ggScrollPosY >= me._thumbnail_scroller_phone0__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone0__vertScrollFg.offsetHeight)) {
					me._thumbnail_scroller_phone0.ggScrollPosY = Math.min(me._thumbnail_scroller_phone0.ggScrollPosY, me._thumbnail_scroller_phone0__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone0__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_scroller_phone0.ggScrollPosY <= 0)) {
					me._thumbnail_scroller_phone0.ggScrollPosY = Math.max(me._thumbnail_scroller_phone0.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone0__vertScrollFg.style.top = me._thumbnail_scroller_phone0.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone0.ggScrollPosY / (me._thumbnail_scroller_phone0__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone0__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone0__content.style.top = -(Math.round((me._thumbnail_scroller_phone0.ggContentHeight * (1.0 - me._thumbnail_scroller_phone0.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone0.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone0.ggScrollPosYPercent = (me._thumbnail_scroller_phone0__vertScrollFg.offsetTop / me._thumbnail_scroller_phone0__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_scroller_phone0.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_scroller_phone0.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_scroller_phone0.ggHPercentVisible);
					me._thumbnail_scroller_phone0.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_scroller_phone0.clientWidth - (me._thumbnail_scroller_phone0.ggVertScrollVisible ? 8 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_scroller_phone0.clientWidth - (me._thumbnail_scroller_phone0.ggVertScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone0.ggHPercentVisible);
					me._thumbnail_scroller_phone0.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_scroller_phone0.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_scroller_phone0.ggVPercentVisible);
					me._thumbnail_scroller_phone0.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_scroller_phone0.clientHeight - (me._thumbnail_scroller_phone0.ggHorScrollVisible ? 8 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_scroller_phone0.clientHeight - (me._thumbnail_scroller_phone0.ggHorScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone0.ggVPercentVisible);
					me._thumbnail_scroller_phone0.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_scroller_phone0__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_scroller_phone0.ggDragInertiaX *= 0.96;
				me._thumbnail_scroller_phone0.ggDragInertiaY *= 0.96;
				me._thumbnail_scroller_phone0.ggScrollByX(me._thumbnail_scroller_phone0.ggDragInertiaX);
				me._thumbnail_scroller_phone0.ggScrollByY(me._thumbnail_scroller_phone0.ggDragInertiaY);
				if (Math.abs(me._thumbnail_scroller_phone0.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_scroller_phone0.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnail_scroller_phone0__content.onmouseup = null;
			me._thumbnail_scroller_phone0__content.onmousemove = null;
			me._thumbnail_scroller_phone0__content.ontouchend = null;
			me._thumbnail_scroller_phone0__content.ontouchmove = null;
			me._thumbnail_scroller_phone0__content.onpointerup = null;
			me._thumbnail_scroller_phone0__content.onpointermove = null;
			setTimeout(function() { me._thumbnail_scroller_phone0.ggIsDragging = false; }, 100);
		}
		me._thumbnail_scroller_phone0__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_scroller_phone0.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_scroller_phone0.ggDragStartY) > 10) me._thumbnail_scroller_phone0.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_scroller_phone0.ggDragLastX) * me._thumbnail_scroller_phone0.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_scroller_phone0.ggDragLastY) * me._thumbnail_scroller_phone0.ggVPercentVisible;
			me._thumbnail_scroller_phone0.ggDragInertiaX = -diffX;
			me._thumbnail_scroller_phone0.ggDragInertiaY = -diffY;
			me._thumbnail_scroller_phone0.ggDragLastX = eventX;
			me._thumbnail_scroller_phone0.ggDragLastY = eventY;
			me._thumbnail_scroller_phone0.ggScrollByX(-diffX);
			me._thumbnail_scroller_phone0.ggScrollByY(-diffY);
		}
		me._thumbnail_scroller_phone0__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_scroller_phone0.ggDragLastX = me._thumbnail_scroller_phone0.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_scroller_phone0.ggDragLastY = me._thumbnail_scroller_phone0.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_scroller_phone0__content.onmouseup = me._thumbnail_scroller_phone0__content.mousetouchend;
			me._thumbnail_scroller_phone0__content.ontouchend = me._thumbnail_scroller_phone0__content.mousetouchend;
			me._thumbnail_scroller_phone0__content.onmousemove = me._thumbnail_scroller_phone0__content.mousetouchmove;
			me._thumbnail_scroller_phone0__content.ontouchmove = me._thumbnail_scroller_phone0__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_scroller_phone0__content.onpointerup = me._thumbnail_scroller_phone0__content.ontouchend;
				me._thumbnail_scroller_phone0__content.onpointermove = me._thumbnail_scroller_phone0__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnail_scroller_phone0__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_scroller_phone0__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_scroller_phone0__content.mousetouchstart;
		}
		elVertScrollBg = me._thumbnail_scroller_phone0__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 8px; height: 895.5px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnail_scroller_phone0__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 8px; height: 895.5px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnail_scroller_phone0.ggScrollPosY = 0;
		me._thumbnail_scroller_phone0.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_scroller_phone0.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone0.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone0.ggScrollByY(me._thumbnail_scroller_phone0.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone0.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnail_scroller_phone0.ggDragLastY;
				me._thumbnail_scroller_phone0.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone0.ggDragLastY = e.clientY;
				me._thumbnail_scroller_phone0.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_scroller_phone0.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone0.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone0.ggScrollByY(me._thumbnail_scroller_phone0.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone0.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnail_scroller_phone0.ggDragLastY;
				me._thumbnail_scroller_phone0.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone0.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_scroller_phone0.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnail_scroller_phone0.ggScrollHeight;
			if (e.offsetY < me._thumbnail_scroller_phone0.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone0.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_scroller_phone0__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnail_scroller_phone0.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnail_scroller_phone0.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone0.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnail_scroller_phone0.ggScrollByYSmooth(30 * me._thumbnail_scroller_phone0.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_scroller_phone0__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 8px; height: 8px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_scroller_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 82.9167%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_phone0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_phone0.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 8;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (8/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbnail_scroller_phone0.ggScrollPosY / me._thumbnail_scroller_phone0.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbnail_scroller_phone0.ggHorScrollVisible && contentHeight > this.clientHeight - 8) || (!me._thumbnail_scroller_phone0.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnail_scroller_phone0__vertScrollBg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone0__vertScrollFg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone0.ggVertScrollVisible = true;
				} else {
					me._thumbnail_scroller_phone0__vertScrollBg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone0__vertScrollFg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone0.ggVertScrollVisible = false;
				}
				if(me._thumbnail_scroller_phone0.ggVertScrollVisible) {
					me._thumbnail_scroller_phone0.ggAvailableWidth = me._thumbnail_scroller_phone0.clientWidth - 8;
					if (me._thumbnail_scroller_phone0.ggHorScrollVisible) {
						me._thumbnail_scroller_phone0.ggAvailableHeight = me._thumbnail_scroller_phone0.clientHeight - 8;
						me._thumbnail_scroller_phone0.ggAvailableHeightWithScale = me._thumbnail_scroller_phone0.getBoundingClientRect().height - me._thumbnail_scroller_phone0__vertScrollBg.getBoundingClientRect().width;
						me._thumbnail_scroller_phone0__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnail_scroller_phone0.ggAvailableHeight = me._thumbnail_scroller_phone0.clientHeight;
						me._thumbnail_scroller_phone0.ggAvailableHeightWithScale = me._thumbnail_scroller_phone0.getBoundingClientRect().height;
						me._thumbnail_scroller_phone0__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnail_scroller_phone0__vertScrollBg.style.height = me._thumbnail_scroller_phone0.ggAvailableHeight + 'px';
					me._thumbnail_scroller_phone0.ggVPercentVisible = contentHeight != 0 ? me._thumbnail_scroller_phone0.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnail_scroller_phone0.ggVPercentVisible > 1.0) me._thumbnail_scroller_phone0.ggVPercentVisible = 1.0;
					me._thumbnail_scroller_phone0.ggScrollHeight =  Math.round(me._thumbnail_scroller_phone0__vertScrollBg.offsetHeight * me._thumbnail_scroller_phone0.ggVPercentVisible);
					me._thumbnail_scroller_phone0__vertScrollFg.style.height = me._thumbnail_scroller_phone0.ggScrollHeight + 'px';
					me._thumbnail_scroller_phone0.ggScrollPosY = me._thumbnail_scroller_phone0.ggScrollPosYPercent * me._thumbnail_scroller_phone0.ggAvailableHeight;
					me._thumbnail_scroller_phone0.ggScrollPosY = Math.min(me._thumbnail_scroller_phone0.ggScrollPosY, me._thumbnail_scroller_phone0__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone0__vertScrollFg.offsetHeight);
					me._thumbnail_scroller_phone0__vertScrollFg.style.top = me._thumbnail_scroller_phone0.ggScrollPosY + 'px';
					if (me._thumbnail_scroller_phone0.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_scroller_phone0.ggScrollPosY / (me._thumbnail_scroller_phone0__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone0__vertScrollFg.offsetHeight);
						me._thumbnail_scroller_phone0__content.style.top = -(Math.round((me._thumbnail_scroller_phone0.ggContentHeight * (1.0 - me._thumbnail_scroller_phone0.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone0.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnail_scroller_phone0.ggAvailableWidth = me._thumbnail_scroller_phone0.clientWidth;
					me._thumbnail_scroller_phone0.ggScrollPosY = 0;
					me._thumbnail_scroller_phone0.ggScrollPosYPercent = 0.0;
					me._thumbnail_scroller_phone0__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnail_scroller_phone0__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnail_scroller_phone0.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_scroller_phone0.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_scroller_phone0);
					me._thumbnail_scroller_phone0.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner_phone0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_phone0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 120;
		el.ggHeight = 130;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner_phone0.ggUpdating == true) return;
			me._node_cloner_phone0.ggUpdating = true;
			var el=me._node_cloner_phone0;
			var curNumCols = 0;
			var parentWidth = me._node_cloner_phone0.parentNode.classList.contains('ggskin_subelement') ? (me._node_cloner_phone0.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._node_cloner_phone0.parentNode.parentNode.ggAvailableWidth : me._node_cloner_phone0.parentNode.parentNode.clientWidth) : me._node_cloner_phone0.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._node_cloner_phone0.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._node_cloner_phone0.offsetLeft) * me._node_cloner_phone0.ggNumRepeat / 100.0) / me._node_cloner_phone0.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner_phone0.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner_phone0.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._node_cloner_phone0.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner_phone0.getFilteredNodes(tourNodes, filter);
			me._node_cloner_phone0.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner_phone0.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner_phone0.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner_phone0.ggWidth) + 'px';
				parameter.width=me._node_cloner_phone0.ggWidth + 'px';
				parameter.height=me._node_cloner_phone0.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_phone0_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._node_cloner_phone0.ggNodeCount = me._node_cloner_phone0.ggNumFilterPassed;
			me._node_cloner_phone0.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner_phone0.parentNode && me._node_cloner_phone0.parentNode.classList.contains('ggskin_subelement') && me._node_cloner_phone0.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner_phone0.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="node_cloner_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 130px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner_phone0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner_phone0.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner_phone0.childNodes.length; i++) {
				var child=me._node_cloner_phone0.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner_phone0.ggUpdatePosition=function (useTransition) {
			me._node_cloner_phone0.ggUpdate();
		}
		me._thumbnail_scroller_phone0__content.appendChild(me._node_cloner_phone0);
		me._thumbnail_menu_phone.appendChild(me._thumbnail_scroller_phone0);
		me.divSkin.appendChild(me._thumbnail_menu_phone);
		el=me._thumbnail_menu_code_2=document.createElement('div');
		el.ggId="thumbnail_menu_code_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -252px;';
		hs+='position : absolute;';
		hs+='top : -264px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu_code_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu_code_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._thumbnail_menu_code_2);
		el=me._thumbnails_toggle=document.createElement('div');
		el.ggId="thumbnails_toggle";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 18px;';
		hs+='bottom : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_toggle.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnails_toggle.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_thumbnails_phone_1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_toggle.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_toggle.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_toggle.style.transition='background-color 100ms ease 0ms';
				if (me._thumbnails_toggle.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_toggle.style.visibility="hidden";
					me._thumbnails_toggle.ggVisible=false;
				}
				else {
					me._thumbnails_toggle.style.visibility=(Number(me._thumbnails_toggle.style.opacity)>0||!me._thumbnails_toggle.style.opacity)?'inherit':'hidden';
					me._thumbnails_toggle.ggVisible=true;
				}
			}
		}
		me._thumbnails_toggle.logicBlock_visible();
		me._thumbnails_toggle.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['thumbnails_toggle'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._thumbnails_toggle.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._thumbnails_toggle.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._thumbnails_toggle.style.transition='background-color 100ms ease 0ms';
				if (me._thumbnails_toggle.ggCurrentLogicStateBackgroundColor == 0) {
					me._thumbnails_toggle.style.backgroundColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._thumbnails_toggle.style.backgroundColor="rgba(20,217,204,0.392157)";
				}
			}
		}
		me._thumbnails_toggle.logicBlock_backgroundcolor();
		me._thumbnails_toggle.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone_3') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails_2', !player.getVariableValue('vis_thumbnails_2'));
			}
			if (
				(
					((player.getVariableValue('resp_phone_3') == true))
				)
			) {
				player.setVariableValue('vis_thumbnails_phone_1', true);
			}
		}
		me._thumbnails_toggle.onmouseenter=function (e) {
			me.elementMouseOver['thumbnails_toggle']=true;
			me._thumbnails_toggle.logicBlock_backgroundcolor();
		}
		me._thumbnails_toggle.onmouseleave=function (e) {
			me.elementMouseOver['thumbnails_toggle']=false;
			me._thumbnails_toggle.logicBlock_backgroundcolor();
		}
		me._thumbnails_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_thumbnails_icon=document.createElement('div');
		els=me._btn_thumbnails_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBjeT0iMzIiIGN4PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgc3R5bGU9ImZpbGw6bm9uZSIgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxjaXJjbGUgcj0iMS4zMyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbW'+
			'l0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4IiBjeT0iMzIiIGN4PSIzMiIvPgogIDxjaXJjbGUgcj0iMS4zMyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4IiBjeT0iMzIiIGN4PSIyMS4zNCIvPgogIDxjaXJjbGUgcj0iMS4zMyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4IiBjeT0iMzIiIGN4PSI0Mi42NiIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_thumbnails_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_thumbnails_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='opacity : 0.40004;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_thumbnails_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_thumbnails_icon.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_toggle.appendChild(me._btn_thumbnails_icon);
		me.divSkin.appendChild(me._thumbnails_toggle);
		el=me._thumbnail_menu=document.createElement('div');
		els=me._thumbnail_menu__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 103px;';
		hs+='left : 50%;';
		hs+='margin-left : -91.5px;';
		hs+='margin-top : -51.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 183px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu.ggHPercentVisible >= 1.0) return;
			me._thumbnail_menu.ggScrollPosX = (me._thumbnail_menu__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
			me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosX / (me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__content.style.left = -(Math.round((me._thumbnail_menu.ggContentWidth * (1.0 - me._thumbnail_menu.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu.ggScrollPosX >= me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth)) {
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu.ggScrollPosX <= 0)) {
					me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosX / (me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__content.style.left = -(Math.round((me._thumbnail_menu.ggContentWidth * (1.0 - me._thumbnail_menu.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu.ggVPercentVisible >= 1.0) return;
			me._thumbnail_menu.ggScrollPosY = (me._thumbnail_menu__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
			me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosY / (me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__content.style.top = -(Math.round((me._thumbnail_menu.ggContentHeight * (1.0 - me._thumbnail_menu.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu.ggScrollPosY >= me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu.ggScrollPosY <= 0)) {
					me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosY / (me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__content.style.top = -(Math.round((me._thumbnail_menu.ggContentHeight * (1.0 - me._thumbnail_menu.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 5 : 0))) * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 5 : 0))) * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_menu__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_menu.ggDragInertiaX *= 0.96;
				me._thumbnail_menu.ggDragInertiaY *= 0.96;
				me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
				me._thumbnail_menu.ggScrollByY(me._thumbnail_menu.ggDragInertiaY);
				if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_menu.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnail_menu__content.onmouseup = null;
			me._thumbnail_menu__content.onmousemove = null;
			me._thumbnail_menu__content.ontouchend = null;
			me._thumbnail_menu__content.ontouchmove = null;
			me._thumbnail_menu__content.onpointerup = null;
			me._thumbnail_menu__content.onpointermove = null;
			setTimeout(function() { me._thumbnail_menu.ggIsDragging = false; }, 100);
		}
		me._thumbnail_menu__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_menu.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_menu.ggDragStartY) > 10) me._thumbnail_menu.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_menu.ggDragLastX) * me._thumbnail_menu.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_menu.ggDragLastY) * me._thumbnail_menu.ggVPercentVisible;
			me._thumbnail_menu.ggDragInertiaX = -diffX;
			me._thumbnail_menu.ggDragInertiaY = -diffY;
			me._thumbnail_menu.ggDragLastX = eventX;
			me._thumbnail_menu.ggDragLastY = eventY;
			me._thumbnail_menu.ggScrollByX(-diffX);
			me._thumbnail_menu.ggScrollByY(-diffY);
		}
		me._thumbnail_menu__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = me._thumbnail_menu.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_menu.ggDragLastY = me._thumbnail_menu.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_menu__content.onmouseup = me._thumbnail_menu__content.mousetouchend;
			me._thumbnail_menu__content.ontouchend = me._thumbnail_menu__content.mousetouchend;
			me._thumbnail_menu__content.onmousemove = me._thumbnail_menu__content.mousetouchmove;
			me._thumbnail_menu__content.ontouchmove = me._thumbnail_menu__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_menu__content.onpointerup = me._thumbnail_menu__content.ontouchend;
				me._thumbnail_menu__content.onpointermove = me._thumbnail_menu__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnail_menu__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_menu__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_menu__content.mousetouchstart;
		}
		elHorScrollBg = me._thumbnail_menu__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 1386px; height: 5px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 1386px; height: 5px; background-color: rgba(255,255,255,0.666667); pointer-events: auto;');
		me._thumbnail_menu.ggScrollPosX = 0;
		me._thumbnail_menu.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.96;
					me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragInertiaX = diffX;
				me._thumbnail_menu.ggDragLastX = e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.96;
					me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragInertiaX = diffX;
				me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu.ggScrollByXSmooth(30 * me._thumbnail_menu.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 77px;';
		hs+='height : 130px;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnails_2') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu.style.transition='opacity 300ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_menu.style.visibility=me._thumbnail_menu.ggVisible?'inherit':'hidden';
					me._thumbnail_menu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_menu.style.opacity == 0.0) { me._thumbnail_menu.style.visibility="hidden"; } }, 305);
					me._thumbnail_menu.style.opacity=0;
				}
			}
		}
		me._thumbnail_menu.logicBlock_alpha();
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 5;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (5/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 5;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (5/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnail_menu__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu.ggHorScrollVisible) {
					me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.clientHeight - 5;
					if (me._thumbnail_menu.ggVertScrollVisible) {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth - 5;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width - me._thumbnail_menu__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width;
					}
					me._thumbnail_menu__horScrollBg.style.width = me._thumbnail_menu.ggAvailableWidth + 'px';
					me._thumbnail_menu.ggHPercentVisible = contentWidth != 0 ? me._thumbnail_menu.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnail_menu.ggHPercentVisible > 1.0) me._thumbnail_menu.ggHPercentVisible = 1.0;
					me._thumbnail_menu.ggScrollWidth = Math.round(me._thumbnail_menu__horScrollBg.offsetWidth * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu__horScrollFg.style.width = me._thumbnail_menu.ggScrollWidth + 'px';
					me._thumbnail_menu.ggScrollPosX = me._thumbnail_menu.ggScrollPosXPercent * me._thumbnail_menu.ggAvailableWidth;
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
					me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
					if (me._thumbnail_menu.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_menu.ggScrollPosX / (me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
						me._thumbnail_menu__content.style.left = -(Math.round((me._thumbnail_menu.ggContentWidth * (1.0 - me._thumbnail_menu.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.clientHeight;
					me._thumbnail_menu.ggScrollPosX = 0;
					me._thumbnail_menu.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._thumbnail_menu.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_menu.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_menu);
					me._thumbnail_menu.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 182;
		el.ggHeight = 100;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			var curNumRows = 0;
			curNumRows = me._thumbnail_cloner.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._thumbnail_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._thumbnail_cloner.getFilteredNodes(tourNodes, filter);
			me._thumbnail_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._thumbnail_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._thumbnail_cloner.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._thumbnail_cloner.ggNodeCount = me._thumbnail_cloner.ggNumFilterPassed;
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner.parentNode && me._thumbnail_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
			me._thumbnail_cloner.ggUpdate();
		}
		me._thumbnail_menu__content.appendChild(me._thumbnail_cloner);
		me.divSkin.appendChild(me._thumbnail_menu);
		el=me._screentint_phone_1=document.createElement('div');
		el.ggId="screentint_phone_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(3px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint_phone_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_phone_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnails_phone_1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._screentint_phone_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._screentint_phone_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._screentint_phone_1.style.transition='opacity 300ms ease 0ms';
				if (me._screentint_phone_1.ggCurrentLogicStateAlpha == 0) {
					me._screentint_phone_1.style.visibility=me._screentint_phone_1.ggVisible?'inherit':'hidden';
					me._screentint_phone_1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._screentint_phone_1.style.opacity == 0.0) { me._screentint_phone_1.style.visibility="hidden"; } }, 305);
					me._screentint_phone_1.style.opacity=0;
				}
			}
		}
		me._screentint_phone_1.logicBlock_alpha();
		me._screentint_phone_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_thumbnails_phone_1', false);
		}
		me._close_popup_phone.onmouseenter=function (e) {
			me.elementMouseOver['close_popup_phone']=true;
			me._btn_close_popup_phone.logicBlock_visible();
		}
		me._close_popup_phone.onmouseleave=function (e) {
			me.elementMouseOver['close_popup_phone']=false;
			me._btn_close_popup_phone.logicBlock_visible();
		}
		me._close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_close_popup_phone=document.createElement('div');
		els=me._btn_close_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2MyZTgxMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB5Mj0iMjQiIHgxPSIyNCIgeTE9IjgiIHgyPSI4IiBjbGFzcz0ic3QwIi8+CiA8bGluZSB5Mj0iMjQiIHgxPSI4IiB5MT0iOCIgeDI9IjI0IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_close_popup_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM2IDM2OyIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSB5Mj0iMjciIHgxPSIyNyIgeTE9IjkiIHgyPSI5IiBjbGFzcz0ic3QwIi8+CiA8bGluZSB5Mj0iMjciIHgxPSI5IiB5MT0iOSIgeDI9IjI3IiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_popup_phone'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_close_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_close_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_close_popup_phone.style.transition='';
				if (me._btn_close_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_close_popup_phone.style.visibility="hidden";
					me._btn_close_popup_phone.ggVisible=false;
				}
				else {
					me._btn_close_popup_phone.style.visibility=(Number(me._btn_close_popup_phone.style.opacity)>0||!me._btn_close_popup_phone.style.opacity)?'inherit':'hidden';
					me._btn_close_popup_phone.ggVisible=true;
				}
			}
		}
		me._btn_close_popup_phone.logicBlock_visible();
		me._btn_close_popup_phone.onmouseenter=function (e) {
			me._btn_close_popup_phone__img.style.visibility='hidden';
			me._btn_close_popup_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_close_popup_phone']=true;
		}
		me._btn_close_popup_phone.onmouseleave=function (e) {
			me._btn_close_popup_phone__img.style.visibility='inherit';
			me._btn_close_popup_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_close_popup_phone']=false;
		}
		me._btn_close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone);
		me._screentint_phone_1.appendChild(me._close_popup_phone);
		el=me._thumbnail_scroller_phone=document.createElement('div');
		els=me._thumbnail_scroller_phone__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 99px;';
		hs+='left : 50%;';
		hs+='margin-left : -82.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 165px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_scroller_phone.ggScrollByX = function(diffX) {
			if(!me._thumbnail_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone.ggHPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone.ggScrollPosX = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft + diffX);
			me._thumbnail_scroller_phone.ggScrollPosX = Math.max(me._thumbnail_scroller_phone.ggScrollPosX, 0);
			me._thumbnail_scroller_phone.ggScrollPosX = Math.min(me._thumbnail_scroller_phone.ggScrollPosX, me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__horScrollFg.style.left = me._thumbnail_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosX / (me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__content.style.left = -(Math.round((me._thumbnail_scroller_phone.ggContentWidth * (1.0 - me._thumbnail_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosXPercent = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft / me._thumbnail_scroller_phone__horScrollBg.offsetWidth);
		}
		me._thumbnail_scroller_phone.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_scroller_phone.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_scroller_phone.ggScrollPosX >= me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth)) {
					me._thumbnail_scroller_phone.ggScrollPosX = Math.min(me._thumbnail_scroller_phone.ggScrollPosX, me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_scroller_phone.ggScrollPosX <= 0)) {
					me._thumbnail_scroller_phone.ggScrollPosX = Math.max(me._thumbnail_scroller_phone.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone__horScrollFg.style.left = me._thumbnail_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosX / (me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__content.style.left = -(Math.round((me._thumbnail_scroller_phone.ggContentWidth * (1.0 - me._thumbnail_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosXPercent = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft / me._thumbnail_scroller_phone__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_scroller_phone.ggScrollByY = function(diffY) {
			if(!me._thumbnail_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone.ggVPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone.ggScrollPosY = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop + diffY);
			me._thumbnail_scroller_phone.ggScrollPosY = Math.max(me._thumbnail_scroller_phone.ggScrollPosY, 0);
			me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosYPercent = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop / me._thumbnail_scroller_phone__vertScrollBg.offsetHeight);
		}
		me._thumbnail_scroller_phone.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_scroller_phone.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_scroller_phone.ggScrollPosY >= me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight)) {
					me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_scroller_phone.ggScrollPosY <= 0)) {
					me._thumbnail_scroller_phone.ggScrollPosY = Math.max(me._thumbnail_scroller_phone.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosYPercent = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop / me._thumbnail_scroller_phone__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_scroller_phone.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_scroller_phone.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_scroller_phone.ggHPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_scroller_phone.clientWidth - (me._thumbnail_scroller_phone.ggVertScrollVisible ? 8 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_scroller_phone.clientWidth - (me._thumbnail_scroller_phone.ggVertScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone.ggHPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_scroller_phone.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_scroller_phone.clientHeight - (me._thumbnail_scroller_phone.ggHorScrollVisible ? 8 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_scroller_phone.clientHeight - (me._thumbnail_scroller_phone.ggHorScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_scroller_phone__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_scroller_phone.ggDragInertiaX *= 0.96;
				me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
				me._thumbnail_scroller_phone.ggScrollByX(me._thumbnail_scroller_phone.ggDragInertiaX);
				me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
				if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnail_scroller_phone__content.onmouseup = null;
			me._thumbnail_scroller_phone__content.onmousemove = null;
			me._thumbnail_scroller_phone__content.ontouchend = null;
			me._thumbnail_scroller_phone__content.ontouchmove = null;
			me._thumbnail_scroller_phone__content.onpointerup = null;
			me._thumbnail_scroller_phone__content.onpointermove = null;
			setTimeout(function() { me._thumbnail_scroller_phone.ggIsDragging = false; }, 100);
		}
		me._thumbnail_scroller_phone__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_scroller_phone.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_scroller_phone.ggDragStartY) > 10) me._thumbnail_scroller_phone.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_scroller_phone.ggDragLastX) * me._thumbnail_scroller_phone.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_scroller_phone.ggDragLastY) * me._thumbnail_scroller_phone.ggVPercentVisible;
			me._thumbnail_scroller_phone.ggDragInertiaX = -diffX;
			me._thumbnail_scroller_phone.ggDragInertiaY = -diffY;
			me._thumbnail_scroller_phone.ggDragLastX = eventX;
			me._thumbnail_scroller_phone.ggDragLastY = eventY;
			me._thumbnail_scroller_phone.ggScrollByX(-diffX);
			me._thumbnail_scroller_phone.ggScrollByY(-diffY);
		}
		me._thumbnail_scroller_phone__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_scroller_phone.ggDragLastX = me._thumbnail_scroller_phone.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_scroller_phone.ggDragLastY = me._thumbnail_scroller_phone.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_scroller_phone__content.onmouseup = me._thumbnail_scroller_phone__content.mousetouchend;
			me._thumbnail_scroller_phone__content.ontouchend = me._thumbnail_scroller_phone__content.mousetouchend;
			me._thumbnail_scroller_phone__content.onmousemove = me._thumbnail_scroller_phone__content.mousetouchmove;
			me._thumbnail_scroller_phone__content.ontouchmove = me._thumbnail_scroller_phone__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_scroller_phone__content.onpointerup = me._thumbnail_scroller_phone__content.ontouchend;
				me._thumbnail_scroller_phone__content.onpointermove = me._thumbnail_scroller_phone__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnail_scroller_phone__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_scroller_phone__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_scroller_phone__content.mousetouchstart;
		}
		elVertScrollBg = me._thumbnail_scroller_phone__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnail_scroller_phone__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnail_scroller_phone.ggScrollPosY = 0;
		me._thumbnail_scroller_phone.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_scroller_phone.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnail_scroller_phone.ggDragLastY;
				me._thumbnail_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone.ggDragLastY = e.clientY;
				me._thumbnail_scroller_phone.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnail_scroller_phone.ggDragLastY;
				me._thumbnail_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_scroller_phone.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnail_scroller_phone.ggScrollHeight;
			if (e.offsetY < me._thumbnail_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_scroller_phone__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnail_scroller_phone.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnail_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnail_scroller_phone.ggScrollByYSmooth(30 * me._thumbnail_scroller_phone.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_scroller_phone__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 8px; height: 8px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_scroller_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 50px);';
		hs+='left : 20px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_phone.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 8;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (8/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbnail_scroller_phone.ggScrollPosY / me._thumbnail_scroller_phone.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbnail_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight - 8) || (!me._thumbnail_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnail_scroller_phone__vertScrollBg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone__vertScrollFg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone.ggVertScrollVisible = true;
				} else {
					me._thumbnail_scroller_phone__vertScrollBg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone__vertScrollFg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone.ggVertScrollVisible = false;
				}
				if(me._thumbnail_scroller_phone.ggVertScrollVisible) {
					me._thumbnail_scroller_phone.ggAvailableWidth = me._thumbnail_scroller_phone.clientWidth - 8;
					if (me._thumbnail_scroller_phone.ggHorScrollVisible) {
						me._thumbnail_scroller_phone.ggAvailableHeight = me._thumbnail_scroller_phone.clientHeight - 8;
						me._thumbnail_scroller_phone.ggAvailableHeightWithScale = me._thumbnail_scroller_phone.getBoundingClientRect().height - me._thumbnail_scroller_phone__vertScrollBg.getBoundingClientRect().width;
						me._thumbnail_scroller_phone__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnail_scroller_phone.ggAvailableHeight = me._thumbnail_scroller_phone.clientHeight;
						me._thumbnail_scroller_phone.ggAvailableHeightWithScale = me._thumbnail_scroller_phone.getBoundingClientRect().height;
						me._thumbnail_scroller_phone__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnail_scroller_phone__vertScrollBg.style.height = me._thumbnail_scroller_phone.ggAvailableHeight + 'px';
					me._thumbnail_scroller_phone.ggVPercentVisible = contentHeight != 0 ? me._thumbnail_scroller_phone.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnail_scroller_phone.ggVPercentVisible > 1.0) me._thumbnail_scroller_phone.ggVPercentVisible = 1.0;
					me._thumbnail_scroller_phone.ggScrollHeight =  Math.round(me._thumbnail_scroller_phone__vertScrollBg.offsetHeight * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone__vertScrollFg.style.height = me._thumbnail_scroller_phone.ggScrollHeight + 'px';
					me._thumbnail_scroller_phone.ggScrollPosY = me._thumbnail_scroller_phone.ggScrollPosYPercent * me._thumbnail_scroller_phone.ggAvailableHeight;
					me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
					me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
					if (me._thumbnail_scroller_phone.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
						me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnail_scroller_phone.ggAvailableWidth = me._thumbnail_scroller_phone.clientWidth;
					me._thumbnail_scroller_phone.ggScrollPosY = 0;
					me._thumbnail_scroller_phone.ggScrollPosYPercent = 0.0;
					me._thumbnail_scroller_phone__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnail_scroller_phone__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnail_scroller_phone.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_scroller_phone.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_scroller_phone);
					me._thumbnail_scroller_phone.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 166;
		el.ggHeight = 100;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner_phone.ggUpdating == true) return;
			me._node_cloner_phone.ggUpdating = true;
			var el=me._node_cloner_phone;
			var curNumCols = 0;
			var parentWidth = me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') ? (me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._node_cloner_phone.parentNode.parentNode.ggAvailableWidth : me._node_cloner_phone.parentNode.parentNode.clientWidth) : me._node_cloner_phone.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._node_cloner_phone.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._node_cloner_phone.offsetLeft) * me._node_cloner_phone.ggNumRepeat / 100.0) / me._node_cloner_phone.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner_phone.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner_phone.getFilteredNodes(tourNodes, filter);
			me._node_cloner_phone.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner_phone.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner_phone.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner_phone.ggWidth) + 'px';
				parameter.width=me._node_cloner_phone.ggWidth + 'px';
				parameter.height=me._node_cloner_phone.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_phone_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._node_cloner_phone.ggNodeCount = me._node_cloner_phone.ggNumFilterPassed;
			me._node_cloner_phone.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner_phone.parentNode && me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') && me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner_phone.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="node_cloner_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 166px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner_phone.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner_phone.childNodes.length; i++) {
				var child=me._node_cloner_phone.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner_phone.ggUpdatePosition=function (useTransition) {
			me._node_cloner_phone.ggUpdate();
		}
		me._thumbnail_scroller_phone__content.appendChild(me._node_cloner_phone);
		me._screentint_phone_1.appendChild(me._thumbnail_scroller_phone);
		me.divSkin.appendChild(me._screentint_phone_1);
		el=me._thumbnail_menu_code=document.createElement('div');
		el.ggId="thumbnail_menu_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu_code.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu_code.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._thumbnail_menu_code);
		me._button_image_normalscreen.logicBlock_visible();
		me.elementMouseOver['button_image_normalscreen']=false;
		me._button_image_fullscreen.logicBlock_visible();
		me.elementMouseOver['button_image_fullscreen']=false;
		me.elementMouseOver['unmute']=false;
		me.elementMouseOver['mute']=false;
		me._stop_rotate_image.logicBlock_visible();
		me.elementMouseOver['stop_rotate_image']=false;
		me._start_rotate_image.logicBlock_visible();
		me.elementMouseOver['start_rotate_image']=false;
		me._button_close_map.logicBlock_visible();
		me.elementMouseOver['button_open_map']=false;
		me._map_container.logicBlock_visible();
		me._map.ggMarkerInstances=[];
		me._map.ggLastNodeId=null;
		me._map.ggMarkerArray=[];
		me._map.ggGoogleMarkerArray=[];
		me._map.ggLastZoom = -1;
		me._map.ggLastLat = 0.0;
		me._map.ggLastLng = 0.0;
		me._map.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._map.ggRadar.update=function() {
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			var radar=me._map.ggRadar;
			var map=me._map.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._map.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map.ggMapId);
				pan -= me._map.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map.ggFilteredIds.length > 0 && me._map.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat()) && (gps[1]==radar.activeNodeLatLng.lng())) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.703125;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat() * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=8;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng();
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat();
					radar_path.push(new google.maps.LatLng(y, x));
				}
				if (radar.poly) {
					radar.poly.setMap(null);
					radar.poly = null;
				}
				radar.poly = new google.maps.Polygon({
					paths: radar_path,
					strokeColor: '#000000',
					strokeOpacity: 0.8,
					strokeWeight: 1,
					fillColor: '#000000',
					fillOpacity: 0.35
				});
				radar.poly.setMap(map);
			} else {
				if (radar) {
					activeNodeLatLng = new google.maps.LatLng(0,0);
					if (radar.poly) {
						radar.poly.setMap(null);
						radar.poly = null;
					}
				}
			}
		}
		me._map.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._map.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._map.ggSetLayer=function(layerIndex) {
			if (Array.isArray(me._map.ggMapLayers) && layerIndex >= 0 && layerIndex < me._map.ggMapLayers.length) {
				me._map.ggMap.setMapTypeId(me._map.ggMapLayers[layerIndex]);
			}
		}
		me._map.ggInitMap=function(keepZoom) {
			var mapType = player.getMapType(me._map.ggMapId);
			var mapDetails = player.getMapDetails(me._map.ggMapId);
			if (!me._map.ggMapId) return;
			if (!me._map.ggMapId.startsWith('google') && Object.keys(mapDetails).length === 0) return;
			if (mapType == 'file') {
				me._map.style.backgroundColor = mapDetails['bgcolor'];
				me._map.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._map.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._map.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map.ggMapId);
			}
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = new google.maps.LatLng(me._map.ggLastLat, me._map.ggLastLng);
			}
			if (mapType == 'web') {
				var mapTypeId;
				if (me._map.ggMapId == 'googleroadmap') {
					mapTypeId = google.maps.MapTypeId.ROADMAP;
				} else if (me._map.ggMapId == 'googlehybrid') {
					mapTypeId = google.maps.MapTypeId.HYBRID;
				} else if (me._map.ggMapId == 'googlesatellite') {
					mapTypeId = google.maps.MapTypeId.SATELLITE;
				} else if (me._map.ggMapId == 'googleterrain') {
					mapTypeId = google.maps.MapTypeId.TERRAIN;
				} else {
					mapTypeId = mapDetails['mapprovider'];
				}
				if (me._map.ggLastZoom == -1) me._map.ggLastZoom = 14;
				var initZoom = keepZoom ? me._map.ggLastZoom : 14;
				var mapOptions = {
					zoom: initZoom,
					center: activeNodeLatLng,
					mapTypeId: mapTypeId,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false,
					gestureHandling: 'greedy'
				};
				if (mapDetails.hasOwnProperty('maplimits') && (mapDetails['maplimits'].length == 4)) {
					mapOptions.restriction = {
						strictBounds: false,
						latLngBounds: {
							north: parseFloat(mapDetails['maplimits'][0]),
							east: parseFloat(mapDetails['maplimits'][1]),
							south: parseFloat(mapDetails['maplimits'][2]),
							west: parseFloat(mapDetails['maplimits'][3]),
						}
					}
				}
				me._map.ggMap = new google.maps.Map(me._map, mapOptions);
				if (mapTypeId == 'googlecustomstyle') {
					var styledMapType = new google.maps.StyledMapType(JSON.parse(mapDetails['googlecustomstylecode']), {name: 'Styled Map'});
					me._map.ggMap.mapTypes.set('styled_map', styledMapType);
					me._map.ggMap.setMapTypeId('styled_map');
				}
				if (mapTypeId == 'googlemap') {
					if (mapDetails.hasOwnProperty('googlelayerstyles')) {
						me._map.ggMapLayers = [];
						for (let layerIndex = 0; layerIndex < mapDetails['googlelayerstyles'].length; layerIndex++) {
							let layerStyle = mapDetails['googlelayerstyles'][layerIndex];
							if (layerStyle.indexOf('/') != -1) {
								var mapTypeId = 'custom' + layerIndex;
								me._map.ggMapLayers.push(mapTypeId);
								me._map.ggMap.mapTypes.set(mapTypeId, new google.maps.ImageMapType({
								getTileUrl: function(coord, zoom) {
									var urlString = layerStyle;
									urlString = urlString.replace('{s}', 'a');
									urlString = urlString.replace('{z}', zoom);
									urlString = urlString.replace('{x}', coord.x);
									urlString = urlString.replace('{y}', coord.y);
									return urlString;
								},
								maxZoom: 19,
								tileSize: new google.maps.Size(256, 256),
								name: mapDetails['googlelayernames'][layerIndex]
								})) ;
							} else {
								me._map.ggMapLayers.push(layerStyle);
							}
						}
						me._map.ggMap.setOptions({
							mapTypeControl: true,
							mapTypeControlOptions: {
								style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
								mapTypeIds: me._map.ggMapLayers
							}
						});
						me._map.ggMap.setMapTypeId(me._map.ggMapLayers[0]);
					} else {
						me._map.ggMap.setMapTypeId(mapDetails['mapstyle']);
					}
				}
				if (mapTypeId == 'openstreetmap') {
					me._map.ggMap.mapTypes.set('openstreetmap', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							if (mapDetails['mapstyle'] == 'streets') {
								return 'https://tile.openstreetmap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							} else if (mapDetails['mapstyle'] == 'outdoors') {
								return 'https://a.tile.opentopomap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							}
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: mapDetails['mapstyle'] == 'outdoors' ? 17 : 18
					}));
				}
				if (mapTypeId == 'mapbox') {
					if (mapDetails.hasOwnProperty('mapboxlayerstyleurls')) {
						me._map.ggMapLayers = [];
						for (let layerIndex = 0; layerIndex < mapDetails['mapboxlayerstyleurls'].length; layerIndex++) {
							var mapTypeId = 'mapbox' + layerIndex;
							me._map.ggMapLayers.push(mapTypeId);
							me._map.ggMap.mapTypes.set(mapTypeId, new google.maps.ImageMapType({
								getTileUrl: function(coord, zoom) {
									var layerStyle = mapDetails['mapboxlayerstyleurls'][layerIndex];
									if (!layerStyle.startsWith('mapbox:')) {
											if (layerStyle == 'satellite') {
												var urlString = 'https://api.mapbox.com/v4/mapbox.' + layerStyle +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails["mapkey"];
											} else {
												var urlString = 'https://api.mapbox.com/styles/v1/mapbox/' + layerStyle +  '-v11/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"];
											}
										urlString = urlString.replace('{s}', 'a');
										urlString = urlString.replace('{z}', zoom);
										urlString = urlString.replace('{x}', coord.x);
										urlString = urlString.replace('{y}', coord.y);
										return urlString;
									} else {
										layerStyle = layerStyle.slice(layerStyle.indexOf('styles/') + 7)
										var urlString = 'https://api.mapbox.com/styles/v1/' + layerStyle + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"];
										urlString = urlString.replace('{s}', 'a');
										urlString = urlString.replace('{z}', zoom);
										urlString = urlString.replace('{x}', coord.x);
										urlString = urlString.replace('{y}', coord.y);
										return urlString;
									} 
								},
								maxZoom: 18,
								tileSize: new google.maps.Size(256, 256),
								name: mapDetails['mapboxlayernames'][layerIndex]
							}));
						}
						me._map.ggMap.setOptions({
							mapTypeControl: true,
							mapTypeControlOptions: {
								style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
								mapTypeIds: me._map.ggMapLayers
							}
						});
						me._map.ggMap.setMapTypeId(me._map.ggMapLayers[0]);
					} else {
						me._map.ggMap.mapTypes.set('mapbox', new google.maps.ImageMapType({
							getTileUrl: function(coord, zoom) {
								if (mapDetails['styleurl'] == '') {
									if (mapDetails['mapstyle'] == 'satellite') {
										var urlString = 'https://api.mapbox.com/v4/mapbox.' + mapDetails["mapstyle"] +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails["mapkey"];
									} else {
										var urlString = 'https://api.mapbox.com/styles/v1/mapbox/' + mapDetails["mapstyle"] +  '-v11/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"];
									}
										urlString = urlString.replace('{s}', 'a');
										urlString = urlString.replace('{z}', zoom);
										urlString = urlString.replace('{x}', coord.x);
										urlString = urlString.replace('{y}', coord.y);
										return urlString;
								} else {
									var styleurlstring = mapDetails['styleurl'];
									styleurlstring = styleurlstring.slice(styleurlstring.indexOf('styles/') + 7);
									var urlString = 'https://api.mapbox.com/styles/v1/' + styleurlstring + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"];
										urlString = urlString.replace('{s}', 'a');
										urlString = urlString.replace('{z}', zoom);
										urlString = urlString.replace('{x}', coord.x);
										urlString = urlString.replace('{y}', coord.y);
										return urlString;
								}
							},
							tileSize: new google.maps.Size(256, 256),
							name: mapDetails['title'],
							maxZoom: 18
						}));
					}
				}
				if (mapTypeId == 'custom') {
					if (mapDetails.hasOwnProperty('customlayerurltemplates')) {
						me._map.ggMapLayers = [];
						for (let layerIndex = 0; layerIndex < mapDetails['customlayerurltemplates'].length; layerIndex++) {
							var mapTypeId = 'custom' + layerIndex;
							me._map.ggMapLayers.push(mapTypeId);
							me._map.ggMap.mapTypes.set(mapTypeId, new google.maps.ImageMapType({
								getTileUrl: function(coord, zoom) {
									var urlString = mapDetails['customlayerurltemplates'][layerIndex];
									urlString = urlString.replace('{s}', 'a');
									urlString = urlString.replace('{z}', zoom);
									urlString = urlString.replace('{x}', coord.x);
									urlString = urlString.replace('{y}', coord.y);
									return urlString;
								},
								maxZoom: parseInt(mapDetails['customlayermaxzooms'][layerIndex]),
								tileSize: new google.maps.Size(256, 256),
								name: mapDetails['customlayernames'][layerIndex]
							}));
						}
						me._map.ggMap.setOptions({
							mapTypeControl: true,
							mapTypeControlOptions: {
								style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
								mapTypeIds: me._map.ggMapLayers
							}
						});
						me._map.ggMap.setMapTypeId(me._map.ggMapLayers[0]);
					} else {
						me._map.ggMap.mapTypes.set('custom', new google.maps.ImageMapType({
							getTileUrl: function(coord, zoom) {
								var urlString = mapDetails['mapurltemplate'];
								urlString = urlString.replace('{s}', 'a');
								urlString = urlString.replace('{z}', zoom);
								urlString = urlString.replace('{x}', coord.x);
								urlString = urlString.replace('{y}', coord.y);
								return urlString;
							},
							tileSize: new google.maps.Size(256, 256),
							name: mapDetails['title'],
							maxZoom: mapDetails['mapmaxzoom']
						}));
					}
				}
				google.maps.event.addListener(me._map.ggMap, 'idle', function(){
					me.updateSize(me._map);
				});
				google.maps.event.addListener(me._map.ggMap, 'zoom_changed', function(){
					me._map.ggRadar.update();
				});
			} else if (mapType == 'file') {
				if (me._map.ggLastZoom == -1) me._map.ggLastZoom = 7;
				var initZoom = keepZoom ? me._map.ggLastZoom : 7;
				var mapOptions = {
				  backgroundColor: mapDetails['bgcolor'],
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: activeNodeLatLng,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false,
					gestureHandling: 'greedy'
				};
				me._map.ggMap = new google.maps.Map(me._map, mapOptions);
				var customMapType = new google.maps.ImageMapType({
					getTileUrl: function(coord, zoom) {
						if (me._map.ggTileAvailable(coord.x, coord.y, zoom)) {
							return basePath + 'images/maptiles/' + me._map.ggMapId + '/' + zoom + '/' + coord.x + '_' + coord.y + '.' + mapDetails['tileformat'];
						} else {
							return null;
						}
					},
					tileSize: new google.maps.Size(256, 256),
					minZoom: 7,
					maxZoom: 7 + mapDetails['zoomlevels'],
					name: mapDetails['title'],
				});
				me._map.ggMap.mapTypes.set(me._map.ggMapId, customMapType);
				me._map.ggMap.setMapTypeId(me._map.ggMapId);
				me._map.ggCalculateFloorplanDimInDeg(mapDetails);
				google.maps.event.addListener(me._map.ggMap, 'center_changed', function() {
					me._map.ggCheckBounds(mapDetails);
				});
				google.maps.event.addListener(me._map.ggMap, 'zoom_changed', function() {
					me._map.ggCheckBounds(mapDetails);
					me._map.ggRadar.update();
				});
			}
			me._map.ggMapNotLoaded = false;
		}
		me._map.ggClearMap=function() {
		me._map.ggClearMapMarkers();
		me._map.ggMap = null;
		me._map.ggMapNotLoaded = true;
		}
		me._map.ggClearMapMarkers=function() {
			me._map.ggLastActivMarker = null;
			var id,marker;
			var markers=me._map.ggMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					if (marker._div.parentNode) {
						marker._div.parentNode.removeChild(marker._div);
					}
					marker.setMap(null);
				}
			}
			me._map.ggMarkerArray=[];
			me._map.ggMarkerInstances=[];
			me._map.ggLastActivMarker = null;
		}
		me._map.ggCenterNode=function(nodeId) {
			if (!me._map.ggMap) return;
			var gps;
			if (player.getMapType(me._map.ggMapId) == 'web') {
				gps=player.getNodeLatLng(nodeId);
			} else {
				gps=player.getNodeMapCoords(nodeId, me._map.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = new google.maps.LatLng(gps[0], gps[1]);
				me._map.ggMap.panTo(markerLocation);
			}
		}
		me._map.ggFitBounds=function(force) {
			if (me._map.ggMapNotLoaded) return;
			if (!me._map.ggMap) return;
			if (!me._map.ggMarkerBounds.isEmpty()) {
				if (me._map.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._map.ggGoogleMarkerArray).length > 1) {
					me._map.ggMap.fitBounds(me._map.ggMarkerBounds, 30);
				} else {
					me._map.ggMap.setCenter(me._map.ggMarkerBounds.getCenter());
					if (player.getMapType(me._map.ggMapId) == 'web') {
						me._map.ggMap.setZoom(18);
					} else {
						me._map.ggMap.setZoom(7);
					}
				}
			}
		}
		me._map.ggInitMapMarkers=function(updateMapBounds) {
			if (!me._map.ggMap) return;
			function SkinMarkerOverlay(pos, div, map) {
				this._pos = pos;
				this._div = div;
				this._map = map;
				this.setMap(map);
			}
			SkinMarkerOverlay.prototype = new google.maps.OverlayView();
			SkinMarkerOverlay.prototype.onAdd = function() {
				this.getPanes().overlayMouseTarget.appendChild(this._div);
				skin.updateSize(this._div);
			}
			SkinMarkerOverlay.prototype.draw = function() {
				var overlayProjection = this.getProjection();
				var point = this.getProjection().fromLatLngToDivPixel(this._pos);
				if (point) {
					this._div.style.left =(point.x - 12) + 'px';
					this._div.style.top =(point.y - 20) + 'px';
				}
			};
			SkinMarkerOverlay.prototype.onRemove = function() {
				this._div = null;
			};
			SkinMarkerOverlay.prototype.getPosition = function() {
				return this._pos;
			};
			me._map.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map.ggFilteredIds = [];
			if (me._map.ggFilter != '') {
				var filter = me._map.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map.ggFilteredIds.length > 0) ids = me._map.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me._map.ggMarkerBounds = new google.maps.LatLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._map.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._map.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = new google.maps.LatLng(gps[0], gps[1]);
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var div=new SkinElement_map_pin_Class(me, markerParent);
					marker=new SkinMarkerOverlay(markerLocation,div._map_pin ,me._map.ggMap);

					me._map.ggMarkerArray[id]=marker;
					me._map.ggMarkerInstances.push(div);
					me._map.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && !me._map.ggMarkerBounds.isEmpty() && updateMapBounds) {
				me._map.ggFitBounds(false);
			}
			skin.updateSize(me._map);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
			this.ggRadar.update();
		}
		me._map.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'file') {
				return;
			}
			me._map.ggMapId = mapId;
			if (!me._map.ggMapNotLoaded) {
				me._map.ggLastZoom = me._map.ggMap.getZoom();
				me._map.ggLastLat = me._map.ggMap.getCenter().lat();
				me._map.ggLastLng = me._map.ggMap.getCenter().lng();
				me._map.ggClearMap();
				me._map.ggInitMap(true);
				me._map.ggInitMapMarkers(false);
			}
		}
		me._map.ggCalculateFloorplanDimInDeg=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				me._map.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
				me._map.mapHeightInDeg = me._map.mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				me._map.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				me._map.mapWidthInDeg = me._map.mapHeightInDeg * mapAR;
			}
		}
		me._map.ggInCheckBounds=false;
		me._map.ggCheckBounds=function(mapDetails) {
			if (me._map.ggInCheckBounds) return;
			me._map.ggInCheckBounds = true;
			var mapCenter = me._map.ggMap.getCenter();
			var currentZoom = me._map.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._map.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._map.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng();
			var y = mapCenter.lat();
			var xTemp = x;
			var yTemp = y;
			if (me._map.mapWidthInDeg < me._map.clientWidth * pixelInDeg) {
				var xMargin = (me._map.clientWidth * pixelInDeg - me._map.mapWidthInDeg) / 2;
				if (x < me._map.mapWidthInDeg / 2 - xMargin) x = me._map.mapWidthInDeg / 2 - xMargin;
				if (x > me._map.mapWidthInDeg / 2 + xMargin) x = me._map.mapWidthInDeg / 2 + xMargin;
			} else {
				if (x > me._map.mapWidthInDeg - xOffset) x = me._map.mapWidthInDeg - xOffset;
				if (x < xOffset) x = xOffset;
			}
			if (me._map.mapHeightInDeg < me._map.clientHeight * pixelInDeg) {
				var yMargin = (me._map.clientHeight * pixelInDeg - me._map.mapHeightInDeg) / 2;
				if (y < -me._map.mapHeightInDeg / 2 - yMargin) y = -me._map.mapHeightInDeg / 2 - yMargin;
				if (y > -me._map.mapHeightInDeg / 2 + yMargin) y = -me._map.mapHeightInDeg / 2 + yMargin;
			} else {
				if (y < -me._map.mapHeightInDeg + yOffset) y = -me._map.mapHeightInDeg + yOffset;
				if (y > -yOffset) y = -yOffset;
			}
			if (x != xTemp || y != yTemp) {
				me._map.ggMap.setCenter(new google.maps.LatLng(y, x));
			}
			me._map.ggInCheckBounds = false;
		}
		me._map.logicBlock_visible();
		me.elementMouseOver['map_close']=false;
		me._screentint_phone.logicBlock_alpha();
		me.elementMouseOver['close_popup_phone1']=false;
		me._btn_close_popup_phone1.logicBlock_visible();
		me.elementMouseOver['btn_close_popup_phone1']=false;
		el = me._thumbnail_menu_code_1;
		;
		me._thumbnail_menu_phone.logicBlock_alpha();
		me.elementMouseOver['close_popup_phone0']=false;
		me._btn_close_popup_phone0.logicBlock_visible();
		me._btn_close_popup_phone_active.logicBlock_visible();
		el = me._thumbnail_menu_code_2;
		;
		me._thumbnails_toggle.logicBlock_visible();
		me._thumbnails_toggle.logicBlock_backgroundcolor();
		me.elementMouseOver['thumbnails_toggle']=false;
		me._thumbnail_menu.logicBlock_alpha();
		me._screentint_phone_1.logicBlock_alpha();
		me.elementMouseOver['close_popup_phone']=false;
		me._btn_close_popup_phone.logicBlock_visible();
		me.elementMouseOver['btn_close_popup_phone']=false;
		el = me._thumbnail_menu_code;
		;
		player.addListener('autorotatechanged', function(event) {
			me._stop_rotate_image.logicBlock_visible();
			me._start_rotate_image.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._node_cloner_phone0.ggInstances.length; i++) {
				me._node_cloner_phone0.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._node_cloner_phone1.ggInstances.length; i++) {
				me._node_cloner_phone1.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			me._stop_rotate_image.logicBlock_visible();
			me._start_rotate_image.logicBlock_visible();
			me._button_close_map.logicBlock_visible();
			me._map_container.logicBlock_visible();
			me._map.logicBlock_visible();
			if (me._map.ggLastActivMarker) {
				if (me._map.ggLastActivMarker._div.ggDeactivate) me._map.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._map.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._map.ggLastActivMarker=marker;
			}
			if (!me._map.ggMapNotLoaded) {
				me._map.ggCenterNode();
			}
			if (player.getMapType(me._map.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map.ggChangeMap(mapId);
					}
				}
			}
			me._map.ggLastNodeId = id;
			me._map.ggRadar.update();
			me._screentint_phone.logicBlock_alpha();
			me._node_cloner_phone1.ggUpdateConditionNodeChange();
			me._thumbnail_menu_phone.logicBlock_alpha();
			me._node_cloner_phone0.ggUpdateConditionNodeChange();
			me._thumbnails_toggle.logicBlock_visible();
			me._thumbnail_menu.logicBlock_alpha();
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
			me._screentint_phone_1.logicBlock_alpha();
			me._node_cloner_phone.ggUpdateConditionNodeChange();
		});
		player.addListener('changevisitednodes', function(event) {
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._node_cloner_phone0.ggInstances.length; i++) {
				me._node_cloner_phone0.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._node_cloner_phone1.ggInstances.length; i++) {
				me._node_cloner_phone1.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
		});
		player.addListener('configloaded', function(event) {
			me._button_close_map.logicBlock_visible();
			me._map_container.logicBlock_visible();
			me._map.logicBlock_visible();
			if (me._map.ggVisible) {
				me._map.ggClearMap();
				me._map.ggInitMap(false);
				me._map.ggInitMapMarkers(true);
			}
			me._screentint_phone.logicBlock_alpha();
			me._thumbnail_scroller_phone1.ggUpdatePosition();
			me._thumbnail_menu_phone.logicBlock_alpha();
			me._thumbnail_scroller_phone0.ggUpdatePosition();
			me._thumbnails_toggle.logicBlock_visible();
			me._thumbnail_menu.ggUpdatePosition();
			me._thumbnail_menu.logicBlock_alpha();
			me._screentint_phone_1.logicBlock_alpha();
			me._thumbnail_scroller_phone.ggUpdatePosition();
		});
		player.addListener('fullscreenenter', function(event) {
			me._button_image_normalscreen.logicBlock_visible();
			me._button_image_fullscreen.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me._button_image_normalscreen.logicBlock_visible();
			me._button_image_fullscreen.logicBlock_visible();
		});
		player.addListener('positionchanged', function(event) {
			me._map.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_phone.logicBlock();
			me._variable_resp_phone_1.logicBlock();
			me._variable_resp_phone_2.logicBlock();
			me._variable_resp_phone_3.logicBlock();
		});
		player.addListener('varchanged_vis_map', function(event) {
			me._button_close_map.logicBlock_visible();
			me._map_container.logicBlock_visible();
			me._map.logicBlock_visible();
		});
		player.addListener('varchanged_vis_thumbnail_menu_phone', function(event) {
			me._thumbnail_menu_phone.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_thumbnails_2', function(event) {
			me._thumbnail_menu.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_thumbnails_phone', function(event) {
			me._screentint_phone.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_thumbnails_phone_1', function(event) {
			me._thumbnails_toggle.logicBlock_visible();
			me._screentint_phone_1.logicBlock_alpha();
		});
		player.addListener('viewerinit', function(event) {
			me._node_cloner_phone1.ggUpdate();
			me._node_cloner_phone0.ggUpdate();
			me._thumbnail_cloner.ggUpdate();
			me._node_cloner_phone.ggUpdate();
		});
	};
	function SkinCloner_node_cloner_phone_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_image_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_image_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_image_phone__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_image_phone_" + nodeId + ".webp");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_image_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 83px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_image_phone.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_image_phone.onclick=function (e) {
			if (me._thumbnail_image_phone.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_thumbnails_phone_1', false);
		}
		me._thumbnail_image_phone.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_image_phone']=true;
			me._thumbnail_border_phone.logicBlock_alpha();
		}
		me._thumbnail_image_phone.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_image_phone']=false;
			me._thumbnail_border_phone.logicBlock_alpha();
		}
		me._thumbnail_image_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab shadow";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._thumbnail_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title_phone.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title_phone.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_image_phone.appendChild(me._thumbnail_title_phone);
		el=me._thumbnail_border_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_border_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_border_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 10;';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 2px solid #c2e812;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -2px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_border_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_border_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_image_phone'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_border_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_border_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_border_phone.style.transition='opacity 100ms ease 0ms';
				if (me._thumbnail_border_phone.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_border_phone.style.visibility=me._thumbnail_border_phone.ggVisible?'inherit':'hidden';
					me._thumbnail_border_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_border_phone.style.opacity == 0.0) { me._thumbnail_border_phone.style.visibility="hidden"; } }, 105);
					me._thumbnail_border_phone.style.opacity=0;
				}
			}
		}
		me._thumbnail_border_phone.logicBlock_alpha();
		me._thumbnail_border_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_image_phone.appendChild(me._thumbnail_border_phone);
		el=me._thumbnail_visited_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_visited_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_visited_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGJhc2VQcm9maWxlPSJ0aW55Ij4KIDxwb2x5bGluZSBzdHJva2'+
			'UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4yNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzJlODEyIiBwb2ludHM9IjMwLDkgJiN4YTsmI3g5OzEzLjUsMjUuNSA2LDE4ICIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KPC9zdmc+Cg==';
		me._thumbnail_visited_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_visited_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg glow";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_visited_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_visited_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnail_visited_phone.ggElementNodeId()) == true)) || 
				((me._thumbnail_visited_phone.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_visited_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_visited_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_visited_phone.style.transition='';
				if (me._thumbnail_visited_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_visited_phone.style.visibility=(Number(me._thumbnail_visited_phone.style.opacity)>0||!me._thumbnail_visited_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_visited_phone.ggVisible=true;
				}
				else {
					me._thumbnail_visited_phone.style.visibility="hidden";
					me._thumbnail_visited_phone.ggVisible=false;
				}
			}
		}
		me._thumbnail_visited_phone.logicBlock_visible();
		me._thumbnail_visited_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_image_phone.appendChild(me._thumbnail_visited_phone);
		me.__div.appendChild(me._thumbnail_image_phone);
		me.elementMouseOver['thumbnail_image_phone']=false;
		me._thumbnail_border_phone.logicBlock_alpha();
		me._thumbnail_visited_phone.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnail_visited_phone.logicBlock_visible();
				me._thumbnail_visited_phone.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnail_visited_phone.logicBlock_visible();
			};
	};
	function SkinCloner_node_cloner_phone0_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._node_thumb_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_thumb_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="node_thumb_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_thumb_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_thumb_phone.onclick=function (e) {
			if (me._node_thumb_phone.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_thumbnail_menu_phone', false);
		}
		me._node_thumb_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumb_img_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumb_img_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumb_img_phone__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumb_img_phone_" + nodeId + ".webp");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 50px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumb_img_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumb_img_phone.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumb_img_phone.onmouseenter=function (e) {
			me.elementMouseOver['thumb_img_phone']=true;
			me._thumb_img_border_phone.logicBlock_alpha();
		}
		me._thumb_img_phone.onmouseleave=function (e) {
			me.elementMouseOver['thumb_img_phone']=false;
			me._thumb_img_border_phone.logicBlock_alpha();
		}
		me._thumb_img_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumb_img_border_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumb_img_border_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumb_img_border_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 88px;';
		hs+='left : calc(50% - ((88px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((88px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 88px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumb_img_border_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumb_img_border_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumb_img_phone'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumb_img_border_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumb_img_border_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumb_img_border_phone.style.transition='opacity 200ms ease 0ms';
				if (me._thumb_img_border_phone.ggCurrentLogicStateAlpha == 0) {
					me._thumb_img_border_phone.style.visibility=me._thumb_img_border_phone.ggVisible?'inherit':'hidden';
					me._thumb_img_border_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumb_img_border_phone.style.opacity == 0.0) { me._thumb_img_border_phone.style.visibility="hidden"; } }, 205);
					me._thumb_img_border_phone.style.opacity=0;
				}
			}
		}
		me._thumb_img_border_phone.logicBlock_alpha();
		me._thumb_img_border_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumb_img_phone.appendChild(me._thumb_img_border_phone);
		me._node_thumb_phone.appendChild(me._thumb_img_phone);
		el=me._thumb_title_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumb_title_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumb_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumb_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._thumb_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumb_title_phone.ggUpdateText();
		el.appendChild(els);
		me._thumb_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumb_title_phone.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.nodeVisited(me._thumb_title_phone.ggElementNodeId()) == true)) || 
				((me._thumb_title_phone.ggIsActive() == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._thumb_title_phone.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._thumb_title_phone.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._thumb_title_phone.style.transition='color 0s';
				if (me._thumb_title_phone.ggCurrentLogicStateTextColor == 0) {
					me._thumb_title_phone.style.color="rgba(255,255,255,0.588235)";
				}
				else {
					me._thumb_title_phone.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._thumb_title_phone.logicBlock_textcolor();
		me._thumb_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._node_thumb_phone.appendChild(me._thumb_title_phone);
		me.__div.appendChild(me._node_thumb_phone);
		me.elementMouseOver['thumb_img_phone']=false;
		me._thumb_img_border_phone.logicBlock_alpha();
		me._thumb_title_phone.logicBlock_textcolor();
			me.ggEvent_changenode=function(event) {
				me._thumb_title_phone.logicBlock_textcolor();
				me._thumb_title_phone.logicBlock_textcolor();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumb_title_phone.logicBlock_textcolor();
			};
	};
	function SkinCloner_node_cloner_phone1_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_image_phone0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_image_phone0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_image_phone0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_image_phone_" + nodeId + ".webp");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_image_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 83px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_image_phone0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_image_phone0.onclick=function (e) {
			if (me._thumbnail_image_phone0.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_thumbnails_phone', false);
		}
		me._thumbnail_image_phone0.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_image_phone0']=true;
			me._thumbnail_border_phone0.logicBlock_alpha();
		}
		me._thumbnail_image_phone0.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_image_phone0']=false;
			me._thumbnail_border_phone0.logicBlock_alpha();
		}
		me._thumbnail_image_phone0.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title_phone0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title_phone0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title_phone0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab shadow";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._thumbnail_title_phone0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title_phone0.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title_phone0.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title_phone0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title_phone0.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_image_phone0.appendChild(me._thumbnail_title_phone0);
		el=me._thumbnail_border_phone0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_border_phone0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_border_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 10;';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 2px solid #c2e812;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -2px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_border_phone0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_border_phone0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_image_phone0'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_border_phone0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_border_phone0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_border_phone0.style.transition='opacity 100ms ease 0ms';
				if (me._thumbnail_border_phone0.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_border_phone0.style.visibility=me._thumbnail_border_phone0.ggVisible?'inherit':'hidden';
					me._thumbnail_border_phone0.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_border_phone0.style.opacity == 0.0) { me._thumbnail_border_phone0.style.visibility="hidden"; } }, 105);
					me._thumbnail_border_phone0.style.opacity=0;
				}
			}
		}
		me._thumbnail_border_phone0.logicBlock_alpha();
		me._thumbnail_border_phone0.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_image_phone0.appendChild(me._thumbnail_border_phone0);
		el=me._thumbnail_visited_phone0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_visited_phone0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_visited_phone0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGJhc2VQcm9maWxlPSJ0aW55Ij4KIDxwb2x5bGluZSBzdHJva2'+
			'UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4yNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzJlODEyIiBwb2ludHM9IjMwLDkgJiN4YTsmI3g5OzEzLjUsMjUuNSA2LDE4ICIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KPC9zdmc+Cg==';
		me._thumbnail_visited_phone0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_visited_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg glow";
		el.ggType='svg';
		hs ='';
		hs+='height : 28px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_visited_phone0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_visited_phone0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnail_visited_phone0.ggElementNodeId()) == true)) || 
				((me._thumbnail_visited_phone0.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_visited_phone0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_visited_phone0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_visited_phone0.style.transition='';
				if (me._thumbnail_visited_phone0.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_visited_phone0.style.visibility=(Number(me._thumbnail_visited_phone0.style.opacity)>0||!me._thumbnail_visited_phone0.style.opacity)?'inherit':'hidden';
					me._thumbnail_visited_phone0.ggVisible=true;
				}
				else {
					me._thumbnail_visited_phone0.style.visibility="hidden";
					me._thumbnail_visited_phone0.ggVisible=false;
				}
			}
		}
		me._thumbnail_visited_phone0.logicBlock_visible();
		me._thumbnail_visited_phone0.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_image_phone0.appendChild(me._thumbnail_visited_phone0);
		me.__div.appendChild(me._thumbnail_image_phone0);
		me.elementMouseOver['thumbnail_image_phone0']=false;
		me._thumbnail_border_phone0.logicBlock_alpha();
		me._thumbnail_visited_phone0.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnail_visited_phone0.logicBlock_visible();
				me._thumbnail_visited_phone0.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnail_visited_phone0.logicBlock_visible();
			};
	};
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_image=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_image;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumbnail_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_image.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_image);
		el=me._thumbnail_tint=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_tint;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_tint.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_tint.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['thumbnail_tint'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._thumbnail_tint.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._thumbnail_tint.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._thumbnail_tint.style.transition='background-color 100ms ease 0ms';
				if (me._thumbnail_tint.ggCurrentLogicStateBackgroundColor == 0) {
					me._thumbnail_tint.style.backgroundColor="rgba(0,0,0,0.313726)";
				}
				else {
					me._thumbnail_tint.style.backgroundColor="rgba(0,0,0,0)";
				}
			}
		}
		me._thumbnail_tint.logicBlock_backgroundcolor();
		me._thumbnail_tint.onclick=function (e) {
			if (me._thumbnail_tint.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_tint.onmouseenter=function (e) {
			me.elementMouseOver['thumbnail_tint']=true;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_border.logicBlock_alpha();
			me._thumbnail_tint.logicBlock_backgroundcolor();
		}
		me._thumbnail_tint.onmouseleave=function (e) {
			me.elementMouseOver['thumbnail_tint']=false;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_border.logicBlock_alpha();
			me._thumbnail_tint.logicBlock_backgroundcolor();
		}
		me._thumbnail_tint.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text hepta_slab";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._thumbnail_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_tint'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title.style.transition='opacity 200ms ease 0ms';
				if (me._thumbnail_title.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title.style.visibility=me._thumbnail_title.ggVisible?'inherit':'hidden';
					me._thumbnail_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_title.style.opacity == 0.0) { me._thumbnail_title.style.visibility="hidden"; } }, 205);
					me._thumbnail_title.style.opacity=0;
				}
			}
		}
		me._thumbnail_title.logicBlock_alpha();
		me._thumbnail_title.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_tint.appendChild(me._thumbnail_title);
		el=me._thumbnail_border=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_border;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_border";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 10;';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 2px solid #c2e812;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -2px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : hidden;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_border.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_border.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_tint'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_border.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_border.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_border.style.transition='opacity 100ms ease 0ms';
				if (me._thumbnail_border.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_border.style.visibility=me._thumbnail_border.ggVisible?'inherit':'hidden';
					me._thumbnail_border.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_border.style.opacity == 0.0) { me._thumbnail_border.style.visibility="hidden"; } }, 105);
					me._thumbnail_border.style.opacity=0;
				}
			}
		}
		me._thumbnail_border.logicBlock_alpha();
		me._thumbnail_border.onclick=function (e) {
			if (me._thumbnail_border.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnail_border.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_tint.appendChild(me._thumbnail_border);
		me.__div.appendChild(me._thumbnail_tint);
		el=me._thumbnail_visited=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_visited;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzNiAzNiIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGJhc2VQcm9maWxlPSJ0aW55Ij4KIDxwb2x5bGluZSBzdHJva2'+
			'UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4yNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzJlODEyIiBwb2ludHM9IjMwLDkgJiN4YTsmI3g5OzEzLjUsMjUuNSA2LDE4ICIgc3Ryb2tlLW9wYWNpdHk9IjEiLz4KPC9zdmc+Cg==';
		me._thumbnail_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg glow";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnail_visited.ggElementNodeId()) == true)) || 
				((me._thumbnail_visited.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_visited.style.transition='';
				if (me._thumbnail_visited.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_visited.style.visibility=(Number(me._thumbnail_visited.style.opacity)>0||!me._thumbnail_visited.style.opacity)?'inherit':'hidden';
					me._thumbnail_visited.ggVisible=true;
				}
				else {
					me._thumbnail_visited.style.visibility="hidden";
					me._thumbnail_visited.ggVisible=false;
				}
			}
		}
		me._thumbnail_visited.logicBlock_visible();
		me._thumbnail_visited.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_visited);
		me._thumbnail_tint.logicBlock_backgroundcolor();
		me.elementMouseOver['thumbnail_tint']=false;
		me._thumbnail_title.logicBlock_alpha();
		me._thumbnail_border.logicBlock_alpha();
		me._thumbnail_visited.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnail_visited.logicBlock_visible();
				me._thumbnail_visited.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnail_visited.logicBlock_visible();
			};
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=1015;
		el.ggDy=62;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 1015px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((41px + 0px) / 2) + 62px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			if (
				(
					((me._map_pin.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
			if (
				(
					((player.getVariableValue('vis_map_close_desktop') == true)) && 
					((player.getHasTouch() == false))
				)
			||
				(
					((player.getVariableValue('vis_map_close_mobile') == true)) && 
					((player.getHasTouch() == true))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
	};
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }@font-face { font-family: "Hepta Slab"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/hepta-slab-latin-regular.woff2") format("woff2"); } .hepta_slab { font-family: "Hepta Slab", serif; } @font-face { font-family: "Montserrat"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/montserrat-latin-regular.woff2") format("woff2"); } .montserrat_regular { font-family: "Montserrat", sans-serif; font-weight: 400; } .outer-shadow { -webkit-filter: drop-shadow( 0px 0px 5px rgba(0, 0, 0, 0.3)); filter: drop-shadow( 0px 0px 5px rgba(0, 0, 0, 0.3)); } @font-face { font-family: "Hepta Slab"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/hepta-slab-latin-regular.woff2") format("woff2"); } .hepta_slab { font-family: "Hepta Slab", serif; }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};