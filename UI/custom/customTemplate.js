function customTemplate(data) {
	this.cfg = data;
	this.helpers = null;
	this.extension = null;
}

/**
 * purpose: Function to render bot message for a given custom template
 * input  : Bot Message
 * output : Custom template HTML
 */
customTemplate.prototype.renderMessage = function (msgData) {
	// For your reference sample code snippet given below
	var messageHtml = '';
	if (msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.template_type == "ListTemplateDisable") {
		messageHtml = $(this.getChatTemplate("modListTemplate")).tmpl({
                'msgData': msgData,
                'helpers': this.helpers,
                'extension': this.extension
            });
        $('.list_disable_btn').on('click', '.RemoveBtn', function (event) {
            console.log("<><><><><");
        });


	} 
	return messageHtml;

	//End of reference snippet code*/

   //return "";	
}; // end of renderMessage method


 /**
 * purpose: Function to get custom template HTML
 * input  : Template type
 * output : Custom template HTML
 *
 */
 
customTemplate.prototype.getChatTemplate = function(tempType) {
	//For your reference sample code snippet given below
	var AdvListTemplate = '<script id="chat_message_tmpl" type="text/x-jqury-tmpl"> \
            {{if msgData.message}} \
                <li {{if msgData.type !== "bot_response"}}id="msg_${msgItem.clientMessageId}"{{/if}} class="list_disable_btn {{if msgData.type === "bot_response"}}fromOtherUsers{{else}}fromCurrentUser{{/if}} with-icon"> \
                    <div class="listTmplContent"> \
                        {{if msgData.createdOn}}<div class="extra-info">${helpers.formatDate(msgData.createdOn)}</div>{{/if}} \
                        {{if msgData.icon}}<div class="profile-photo"> <div class="user-account avtar" style="background-image:url(${msgData.icon})"></div> </div> {{/if}} \
                        <ul class="listTmplContentBox"> \
                            {{if msgData.message[0].component.payload.title || msgData.message[0].component.payload.heading}} \
                                <li class="listTmplContentHeading"> \
                                    {{if msgData.type === "bot_response" && msgData.message[0].component.payload.heading}} {{html helpers.convertMDtoHTML(msgData.message[0].component.payload.heading, "bot")}} {{else}} {{html helpers.convertMDtoHTML(msgData.message[0].component.payload.text, "user")}} {{/if}} \
                                    {{if msgData.message[0].cInfo && msgData.message[0].cInfo.emoji}} \
                                        <span class="emojione emojione-${msgData.message[0].cInfo.emoji[0].code}">${msgData.message[0].cInfo.emoji[0].title}</span> \
                                    {{/if}} \
                                </li> \
                            {{/if}} \
                            {{each(key, msgItem) msgData.message[0].component.payload.elements}} \
                                {{if msgData.message[0].component.payload.buttons}} \
                                    {{if key<= 2 }}\
                                        <li class="listTmplContentChild"> \
                                            {{if msgItem.image_url}} \
                                            <div class="listRightContent"> \
                                                <img src="${msgItem.image_url}" /> \
                                            </div> \
                                            {{/if}} \
                                            <div class="listLeftContent"> \
                                                <div class="listItemTitle">{{if msgData.type === "bot_response"}} {{html helpers.convertMDtoHTML(msgItem.title, "bot")}} {{else}} {{html helpers.convertMDtoHTML(msgItem.title, "user")}} {{/if}}</div> \
                                                {{if msgItem.subtitle}}<div class="listItemSubtitle">{{if msgData.type === "bot_response"}} {{html helpers.convertMDtoHTML(msgItem.subtitle, "bot")}} {{else}} {{html helpers.convertMDtoHTML(msgItem.subtitle, "user")}} {{/if}}</div>{{/if}} \
                                                {{if msgItem.default_action}}<div class="listItemPath" type="url" url="${msgItem.default_action.url}">${msgItem.default_action.url}</div>{{/if}} \
                                                {{if msgItem.buttons}}\
                                                <div> \
                                                    <span class="buyBtn RemoveBtn" {{if msgItem.buttons[0].type}}type="${msgItem.buttons[0].type}"{{/if}} {{if msgItem.buttons[0].url}}url="${msgItem.buttons[0].url}"{{/if}} {{if msgItem.buttons[0].payload}}value="${msgItem.buttons[0].payload}"{{/if}}>{{if msgItem.buttons[0].title}}${msgItem.buttons[0].title}{{else}}Buy{{/if}}</span> \
                                                </div> \
                                                {{/if}}\
                                            </div>\
                                        </li> \
                                    {{/if}}\
                                {{else}} \
                                    <li class="listTmplContentChild"> \
                                        {{if msgItem.image_url}} \
                                        <div class="listRightContent"> \
                                            <img src="${msgItem.image_url}" /> \
                                        </div> \
                                        {{/if}} \
                                        <div class="listLeftContent"> \
                                            <div class="listItemTitle">{{if msgData.type === "bot_response"}} {{html helpers.convertMDtoHTML(msgItem.title, "bot")}} {{else}} {{html helpers.convertMDtoHTML(msgItem.title, "user")}} {{/if}}</div> \
                                            {{if msgItem.subtitle}}<div class="listItemSubtitle">{{if msgData.type === "bot_response"}} {{html helpers.convertMDtoHTML(msgItem.subtitle, "bot")}} {{else}} {{html helpers.convertMDtoHTML(msgItem.subtitle, "user")}} {{/if}}</div>{{/if}} \
                                            {{if msgItem.default_action}}<div class="listItemPath" type="url" url="${msgItem.default_action.url}">${msgItem.default_action.url}</div>{{/if}} \
                                            {{if msgItem.buttons}}\
                                            <div> \
                                                <span class="buyBtn RemoveBtn" {{if msgItem.buttons[0].type}}type="${msgItem.buttons[0].type}"{{/if}} {{if msgItem.buttons[0].url}}url="${msgItem.buttons[0].url}"{{/if}} {{if msgItem.buttons[0].payload}}value="${msgItem.buttons[0].payload}"{{/if}}>{{if msgItem.buttons[0].title}}${msgItem.buttons[0].title}{{else}}Buy{{/if}}</span> \
                                            </div> \
                                            {{/if}}\
                                        </div>\
                                    </li> \
                                {{/if}} \
                            {{/each}} \
                            </li> \
                            {{if msgData.message[0].component.payload.elements.length > 3 && msgData.message[0].component.payload.buttons}}\
                            <li class="viewMoreList"> \
                                <span class="viewMore" url="{{if msgData.message[0].component.payload.buttons[0].url}}${msgData.message[0].component.payload.buttons[0].url}{{/if}}" type="${msgData.message[0].component.payload.buttons[0].type}" value="{{if msgData.message[0].component.payload.buttons[0].payload}}${msgData.message[0].component.payload.buttons[0].payload}{{else}}${msgData.message[0].component.payload.buttons[0].title}{{/if}}">${msgData.message[0].component.payload.buttons[0].title}</span> \
                            </li> \
                            {{/if}}\
                        </ul> \
                    </div> \
                </li> \
            {{/if}} \
        </script>';
        if(tempType === "modListTemplate"){
            return AdvListTemplate;
        } else {
            return "";
    }
}; // end of getChatTemplate method