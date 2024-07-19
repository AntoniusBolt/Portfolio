<!-- ******************************************************************** -->

<!-- slide_list pre-defined as array of 3-digit page anchors, i.e. 'txx' -->

var numSlides = slide_list.length

var currSlide = 0

<!-- ******************************************************************** -->

function InitSlideShow () {

ShowSlide( currSlide, true )

}
<!-- ******************************************************************** -->

function DisplaySlide ( slide_index ) {
  
  ShowSlide( currSlide, false )
  currSlide = slide_index
  ShowSlide( currSlide, true )

}
<!-- ******************************************************************** -->

function ShowSlide ( slide_index, display_slide ) {

slide_id = "slide_" + slide_list[slide_index]

if (document.getElementById) {
  var slide=document.getElementById(slide_id).style
  if (display_slide) {
    slide.display = "block"
  }
  else {
    slide.display="none"
  }
}
else if (document.all) {
  var slide=window.document.all.item(slide_id).style
  if (display_slide) {
    slide.display = "block"
  }
  else {
    slide.display="none"
  }
}

}
<!-- ******************************************************************** -->

function NextSlide () {

if ( currSlide < numSlides - 1 )
  DisplaySlide( currSlide + 1 )
else
  DisplaySlide( 0 )

}
<!-- ******************************************************************** -->

function PrevSlide () {

if ( currSlide > 0 )
  DisplaySlide( currSlide - 1 )
else
  DisplaySlide( numSlides - 1 )

}
<!-- ******************************************************************** -->
