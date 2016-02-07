var Attributes = new (function(){
	var _queryCache = {};

	var valueTemplate = _.template(
		'<li>' +
            '<strong>{{value.value}}</strong> {{value.attribute.name}}' + 
           	'<a class="remove-attribute" href="javascript:void(0)">delete</a>' +
           	'<input type="hidden" name="valueIds" value="{{value.id}}" />' +
         '</li>');
         
   	this.autocomplete = function(source, evt, callback){
		var Key = {
			DOWN : 	40,
			UP : 	38,
			ENTER:	13,
			ESC:	27
		};	
	 	function isControlKey(code){
			return (code == Key.DOWN || code == Key.UP || code == Key.ENTER || code == Key.ESC);
		}
		        
		function focusNext(){
			if($j('#searchAttributeOptions li').is('.active')){
				$j('#searchAttributeOptions li.active').removeClass('active').next().focus().addClass('active');
			} else {
				$j('#searchAttributeOptions li').removeClass('active');
				$j('#searchAttributeOptions li:first').focus().addClass('active');
			}
		}
		function focusPrev(){
			if($j('#searchAttributeOptions li').is('.active')){
				$j('#searchAttributeOptions li.active').removeClass('active').prev().focus().addClass('active');
			} else {
				$j('#searchAttributeOptions li').removeClass('active');
				$j('#searchAttributeOptions li:last').focus().addClass('active');
			}
		}
		function clearSource(){
			$j(source).val('');
			$j('#searchAttributeOptions').hide();
		}
		function selectItem(){
				$j('#searchAttributeOptions li.active').click();
		}   	
		$j(source).live('keypress', function(event){
			return (event.keyCode != Key.ENTER)
		});
		$j(source).live(evt, function(event){
			var term = $j(this).attr('value');
			if(isControlKey(event.keyCode)){
				event.stopImmediatePropagation();
				event.preventDefault();
				switch(event.keyCode){
					case Key.DOWN:
						focusNext();
						break;
					case Key.UP:
						focusPrev();
						break;
					case Key.ENTER:
						selectItem();
						break;
					case Key.ESC:
						clearSource();
						break;
				}
			} else {
				if(!_.isNull(term) && !_.isUndefined(term) && term.length > 0){
					var results = _queryCache[term.charAt(0)];
					if(typeof results != 'undefined' && results != null) {
						callback(search(term, results), 'success');
					} else {
						ga_autocomplete.search(term.charAt(0), function(data, status){
							_queryCache[term.charAt(0)] = data.values;
							callback(search(term, data.values), status)
						});
					}
				} else {
					$j('#searchAttributeOptions').hide();
				}
			}
		});
		return false;
	}		
     this.addAttribute = function(value){
     	$j('#related-attributes').append(valueTemplate({value: value}));
     	$j('#global-att-input').attr('value', '');
     }
     
     this.removeAttribute = function(){
     	$j(this).closest('LI').remove();
     }		
     
	function search(needle, haystack){
		return _.filter(haystack, (function(needle){
			return function(n){
				if(!_.isUndefined(n.value) && !_.isNull(n.value)){
					if(n.value.isWildcard){
						return (n.attribute.name.toUpperCase().indexOf(needle.toUpperCase()) == 0);
					} else {
						return (n.value.toUpperCase().indexOf(needle.toUpperCase()) == 0);
					}
				} else {
					return false;
				}
			};
		})(needle));
	}
});

(function($){
	$(document).ready(function(){
		// Attribute autocomplete / add attribute
		var searchOptionsId = '#searchAttributeOptions';
		var searchFieldId = '#global-att-input';
		
		Attributes.autocomplete(searchFieldId, 'keyup', function(data, status){
			$(searchOptionsId).html('').show();
			var values = data;
			for(var i in values){
				if(typeof values[i] == 'object'){
					var listItem = $(ga_autocomplete.templates.value({value: values[i]}))
					listItem.data('gaValue', values[i]);
					listItem.bind('click', function(){
						var gaValue = $(this).data('gaValue');
						Attributes.addAttribute(gaValue);
						$(searchOptionsId).html('').hide();
					});
					$(searchOptionsId).append(listItem);
				}
			}
		});
		$('.remove-attribute').live('click', Attributes.removeAttribute);		
		
		$('#searchAttributeOptions li').live('mouseover', function(){
			$(this).addClass('active');
		});
		$('#searchAttributeOptions li').live('mouseout', function(){
			$(this).removeClass('active');
		});					
	})
})(jQuery);
