var leverParameter = '';

Drupal.behaviors.ucsfJobs = {

    attach : function(context, settings) {

        var url = 'https://api.lever.co/v0/postings/ucsf?mode=json';
        var pageUrl = window.location.href;
        var trackingPrefix = '?lever-';
        console.dir(this);
        //Fetching job postings from Lever's postings API
        jQuery.ajax({
            dataType: "json",
            url: url,
            success: function(data) {
                Drupal.behaviors.ucsfJobs.createJobs(data);
            }
        });

        if (pageUrl.indexOf(trackingPrefix) >= 0) {
            // Found Lever parameter
            var pageUrlSplit = pageUrl.split(trackingPrefix);
            leverParameter = '?lever-'+pageUrlSplit[1];
        }

        //Making each job description a link
        jQuery("#jobs-container").on("click", ".job", function() {
            var link = jQuery(this).data("link");
            window.location.href = link;
        });

    },

    createJobs : function (_data) {
        for(var i = 0; i < _data.length; i++) {
            var posting = _data[i] ;
            var title = posting.text;
            var description = posting.description;
            //Making each job description shorter than 250 characters
            var shortDescription = this.truncate(jQuery.trim(description), 250);
            var location = posting.categories.location;
            var commitment = posting.categories.commitment;
            var team = posting.categories.team;
            var link = posting.hostedUrl+leverParameter;

            commitment = (commitment===undefined) ? '' : '<span>'+commitment+'</span>';

            jQuery('#jobs-container .jobs-list').append(
                '<div data-link="'+link+'" class="job">' +
                '<h2 class="job-title" href="'+link+'"">'+title+'</h2>' +
                '<p class="tags"><span>'+team+'</span><span>'+location+'</span>'+commitment+'</p>' +
                '<p class="description">'+shortDescription+'</p>' +
                '</div>'
            );
        }
    },

    truncate : function(str, n, useWordBoundary) {
        var singular, tooLong = str.length > n;
        useWordBoundary = useWordBoundary || true;
        // Edge case where someone enters a ridiculously long string.
        str = tooLong ? str.substr(0, n-1) : str;
        singular = (str.search(/\s/) === -1) ? true : false;

        if(!singular) {
            str = useWordBoundary && tooLong ? str.substr(0, str.lastIndexOf(' ')) : str;
        }
        return  tooLong ? str + '&hellip;' : str;
    }

};








