class Mrak
	constructor: (later = false) -> 
		@smer = if Math.random() > 0.5 then -1 else 1
		@speed = Math.random() * 5
		@velikost_mraku = 1 + Math.round Math.random() * 2
		body = $ 'body'
		@body_width = body.width()
		@start_x = if later then 0 else Math.round Math.random() * @body_width
		@start_x = @body_width if @start_x==0 and later
		@start_y = Math.round Math.random() * 550
		@objekt = $ '<img>', { src : '/img/mrak'+ @velikost_mraku + '.png' , style : 'position: absolute; left : '+ @start_x+'px  ; top: '+ @start_y+'px; z-index:5';  }
		@objekt.appendTo body
		#console.log(@);
	
	kam: ->
		alert @smer

	presun: ->
		#position = @objekt.position()
		#@objekt.position position.left+1, position.top
		@presun = if @smer == 1 then '+=' else '-='
		@objekt.animate { left :  @presun+(@body_width + 200)  , },50000 * @speed, ->
			@?.objekt?.remove()
			mrak = new Mrak true
			mrak.presun()
						


class Mraky
	constructor: ->
		@pocet = 7
		@mrak = []		
		for i in [0...@pocet]
			@mrak[i] = new Mrak

	move: ->
		for i in [0...@pocet]
			@mrak[i].presun()


mraky = new Mraky
mraky.move()