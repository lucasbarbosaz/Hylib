import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html {
        background-color: ${(props) => props.theme.html.backgroundColor};
        width: ${(props) => props.theme.html.width};
        width: ${(props) => props.theme.html.width};
        height: ${(props) => props.theme.html.height};
        min_height: ${(props) => props.theme.html.minHeight};
    }

    .general-box, .general-box-3 {
        position: ${(props) => props.theme.generalBox.position};
        background-color: ${(props) => props.theme.generalBox.backgroundColor};
        width: ${(props) => props.theme.generalBox.width};
        border-radius: ${(props) => props.theme.generalBox.borderRadius};
        border: ${(props) => props.theme.generalBox.border};
        padding: ${(props) => props.theme.generalBox.padding};
        float: ${(props) => props.theme.generalBox.float};
        color: ${(props) => props.theme.generalBox.color};
    }

    .featured-user {
        position: ${(props) => props.theme.featuredUser.position};
        height: ${(props) => props.theme.featuredUser.height};
        border: ${(props) => props.theme.featuredUser.border};
        border-radius: ${(props) => props.theme.featuredUser.borderRadius};
    }

    hr {
        position: ${(props) => props.theme.hr.position};
        background: ${(props) => props.theme.hr.background};
        width: ${(props) => props.theme.hr.width};
        height: ${(props) => props.theme.hr.height};
        border: ${(props) => props.theme.hr.border};
        margin: ${(props) => props.theme.hr.margin};
    }

    .info-news {
        color: ${(props) => props.theme.articlesIndex.color};
    }

    .font-theme {
        color: ${(props) => props.theme.fontTheme.color}!important;
    }

    .header-nav-menu::before {
        content: ${(props) => props.theme.headerMenu.content};
        position: ${(props) => props.theme.headerMenu.margin};
        background: ${(props) => props.theme.headerMenu.background};
        width: ${(props) => props.theme.headerMenu.width};
        height: ${(props) => props.theme.headerMenu.height};
    }

    #general-alert {
        position: ${(props) => props.theme.generalAlert.position};
        background: ${(props) => props.theme.generalAlert.background};
        width: ${(props) => props.theme.generalAlert.width};
        border: ${(props) => props.theme.generalAlert.border};
        border-radius: ${(props) => props.theme.generalAlert.borderRadius};
        padding: ${(props) => props.theme.generalAlert.padding};
        margin: ${(props) => props.theme.generalAlert.margin};
        display: ${(props) => props.theme.generalAlert.display};
    }

    #general-alert-label-title {
        position: ${(props) => props.theme.generalAlert.labelTitle.position};
        color: ${(props) => props.theme.generalAlert.labelTitle.color};
        font-size: ${(props) => props.theme.generalAlert.labelTitle.fontSize};
        font-weight: ${(props) => props.theme.generalAlert.labelTitle.fontWeight};
    }

    #general-alert-label-description {
        position: ${(props) => props.theme.generalAlert.labelDescription.position};
        color: ${(props) => props.theme.generalAlert.labelDescription.color};
        width: ${(props) => props.theme.generalAlert.labelDescription.width};
        height: ${(props) => props.theme.generalAlert.labelDescription.height};
        font-size: ${(props) => props.theme.generalAlert.labelDescription.fontSize};
        white-space: ${(props) => props.theme.generalAlert.labelDescription.whiteSpace};
        text-overflow: ${(props) => props.theme.generalAlert.labelDescription.textOverflow};
        overflow: ${(props) => props.theme.generalAlert.labelDescription.overflow};
    }

    li.header-menu > a.visited,
    li.header-menu > label.visited,
    li.header-menu > a.visited h5,
    li.header-menu > label.visited h5 {
        background: ${(props) => props.theme.headerMenuOptions.label.background};
        font-weight: ${(props) => props.theme.headerMenuOptions.label.fontWeight};
    }

    .header-menu.dropdown.active label {
        color: ${(props) => props.theme.headerMenuOptions.dropDownActive.color};
        background: ${(props) => props.theme.headerMenuOptions.dropDownActive.background};
    }

    
    .header-menu.dropdown > .dropdown-content {
        position: ${(props) => props.theme.headerMenuOptions.dropDownContent.position};
        background: ${(props) => props.theme.headerMenuOptions.dropDownContent.background};
        top: ${(props) => props.theme.headerMenuOptions.dropDownContent.top};
        border-radius: ${(props) => props.theme.headerMenuOptions.dropDownContent.borderRadius};
        padding: ${(props) => props.theme.headerMenuOptions.dropDownContent.padding};
        margin: ${(props) => props.theme.headerMenuOptions.dropDownContent.margin};
        box-shadow: ${(props) => props.theme.headerMenuOptions.dropDownContent.boxShadow};
        display: ${(props) => props.theme.headerMenuOptions.dropDownContent.display};
        z-index: ${(props) => props.theme.headerMenuOptions.dropDownContent.zIndex};
        overflow: ${(props) => props.theme.headerMenuOptions.dropDownContent.overflow};
    }

    .header-menu.dropdown > .dropdown-content .list-content {
        position: ${(props) => props.theme.headerMenuOptions.dropDownContent.listContent.position};
        color: ${(props) => props.theme.headerMenuOptions.dropDownContent.listContent.color};
        padding: ${(props) => props.theme.headerMenuOptions.dropDownContent.listContent.padding};
        font-size: ${(props) => props.theme.headerMenuOptions.dropDownContent.listContent.fontSize};
        white-space: ${(props) => props.theme.headerMenuOptions.dropDownContent.listContent.whiteSpace};
        display: ${(props) => props.theme.headerMenuOptions.dropDownContent.listContent.display};
        text-decoration: ${(props) => props.theme.headerMenuOptions.dropDownContent.listContent.textDecoration};
    }

    .header-menu.dropdown .dropdown-content .list-content:hover {
        cursor: ${(props) => props.theme.headerMenuOptions.dropDownContent.listContent.hover.cursor};
        background: ${(props) => props.theme.headerMenuOptions.dropDownContent.listContent.hover.background};
    }

    .header-menu > a:hover,
    .header-menu > label:hover {
        background: ${(props) => props.theme.headerMenuOptions.labelHover.background};
        cursor: ${(props) => props.theme.headerMenuOptions.labelHover.pointer};
    }

    .header-menu > a h5,
    .header-menu > label h5 {
        position: ${(props) => props.theme.headerMenuOptions.headerMenuLabelH5.position};
        color: ${(props) => props.theme.headerMenuOptions.headerMenuLabelH5.color};
        margin: ${(props) => props.theme.headerMenuOptions.headerMenuLabelH5.margin};
        pointer-events: ${(props) => props.theme.headerMenuOptions.headerMenuLabelH5.pointerEvents};
        display: ${(props) => props.theme.headerMenuOptions.headerMenuLabelH5.display};
    }

    .header-menu > a:hover h5,
    .header-menu > label:hover h5 {
        color: ${(props) => props.theme.headerMenuOptions.headerMenuLabelH5.hover.color};
    }

    .header-menu.dropdown.active label h5 {
        color: ${(props) => props.theme.headerMenuOptions.headerMenuLabelH5.active.color};
    }

    .header-nav-menu {
        height: ${(props) => props.theme.headerMenuOptions.headerNavMenu.height};
        border-bottom: ${(props) => props.theme.headerMenuOptions.headerNavMenu.borderBottom};
    }

    .last-articles-slider > .last-articles-slider-list > li:nth-of-type(even) {
        background: ${(props) => props.theme.lastArticles.sliderList.background};
    }

    .another-header-menu {
        position: ${(props) => props.theme.profile.anotherHeaderMenu.position};
        background: ${(props) => props.theme.profile.anotherHeaderMenu.background};
        height: ${(props) => props.theme.profile.anotherHeaderMenu.height};
        border-bottom: ${(props) => props.theme.profile.anotherHeaderMenu.borderBottom};
        margin: ${(props) => props.theme.profile.anotherHeaderMenu.margin};
    }

    .profile-card-main-about-badges {
        position: ${(props) => props.theme.profile.aboutBadges.position};
        background: ${(props) => props.theme.profile.aboutBadges.background};
        width: ${(props) => props.theme.profile.aboutBadges.width};
        height: ${(props) => props.theme.profile.aboutBadges.height};
        border-radius: ${(props) => props.theme.profile.aboutBadges.borderRadius};
        margin: ${(props) => props.theme.profile.aboutBadges.margin};
        padding: ${(props) => props.theme.profile.aboutBadges.padding};
        padding-bottom: ${(props) => props.theme.profile.aboutBadges.paddingBottom};
    }

    .profile-badges-display,
    .profile-group-display {
        justify-content: ${(props) => props.theme.profile.aboutBadges.justifyContent};
        position: ${(props) => props.theme.profile.aboutBadges.position};
        background: ${(props) => props.theme.profile.aboutBadges.background};
        width: ${(props) => props.theme.profile.aboutBadges.width};
        height: ${(props) => props.theme.profile.aboutBadges.height};
        top: ${(props) => props.theme.profile.aboutBadges.top};
        border-radius: ${(props) => props.theme.profile.aboutBadges.borderRadius};
        padding: ${(props) => props.theme.profile.aboutBadges.padding};
        margin: ${(props) => props.theme.profile.aboutBadges.margin};
        box-shadow: ${(props) => props.theme.profile.aboutBadges.boxShadow};
        display: ${(props) => props.theme.profile.aboutBadges.display};
    }

    .profile-card-main-about-badges-display {
        position:  ${(props) => props.theme.profile.aboutBadges.badgeEmpty.position};
        background:  ${(props) => props.theme.profile.aboutBadges.badgeEmpty.background};
        width:  ${(props) => props.theme.profile.aboutBadges.badgeEmpty.width};
        height:  ${(props) => props.theme.profile.aboutBadges.badgeEmpty.height};
        top:  ${(props) => props.theme.profile.aboutBadges.badgeEmpty.top};
        border-radius:  ${(props) => props.theme.profile.aboutBadges.badgeEmpty.borderRadius};
        padding:  ${(props) => props.theme.profile.aboutBadges.badgeEmpty.padding};
        margin:  ${(props) => props.theme.profile.aboutBadges.badgeEmpty.margin};
        box-shadow: ${(props) => props.theme.profile.aboutBadges.badgeEmpty.boxShadow};
        display:  ${(props) => props.theme.profile.aboutBadges.badgeEmpty.display};
        transition:  ${(props) => props.theme.profile.aboutBadges.badgeEmpty.transition};
    }

    .profile-rooms-box {
        position: ${(props) => props.theme.profile.aboutBadges.rooms.position};
        background: ${(props) => props.theme.profile.aboutBadges.rooms.background};
        height: ${(props) => props.theme.profile.aboutBadges.rooms.height};
        border-radius: ${(props) => props.theme.profile.aboutBadges.rooms.borderRadius};
        padding: ${(props) => props.theme.profile.aboutBadges.rooms.padding};
        margin: ${(props) => props.theme.profile.aboutBadges.rooms.margin};
        overflow: ${(props) => props.theme.profile.aboutBadges.rooms.overflow};
    }

    .errands-area-box {
        position: ${(props) => props.theme.profile.errandsAreaBox.position};
        background: ${(props) => props.theme.profile.errandsAreaBox.background};
        border-radius: ${(props) => props.theme.profile.errandsAreaBox.borderRadius};
        padding: ${(props) => props.theme.profile.errandsAreaBox.padding};
    }

    .send-errand-area-nofriends {
        position: ${(props) => props.theme.profile.sendErrandAreaNofriends.position};
        background: ${(props) => props.theme.profile.sendErrandAreaNofriends.background};
        border-top: ${(props) => props.theme.profile.sendErrandAreaNofriends.borderTop};
        margin: ${(props) => props.theme.profile.sendErrandAreaNofriends.margin};
        padding: ${(props) => props.theme.profile.sendErrandAreaNofriends.padding};
        text-align: ${(props) => props.theme.profile.sendErrandAreaNofriends.textAlign};
    }
    
    .general-box-menu-link.visited {
        background: ${(props) => props.theme.settings.otherPreferences.visited.background};
        color: ${(props) => props.theme.settings.otherPreferences.visited.color};
    }

    .general-box-menu-link:hover {
        background: ${(props) => props.theme.settings.otherPreferences.hover.background};
    }

    .bg-2 {
        background: ${(props) => props.theme.profile.aboutBadges.bg2.background};
    }

    .color-4 {
        color: ${(props) => props.theme.settings.fontsColor.color4.color};
    }

    .color-5 {
        color: ${(props) => props.theme.settings.fontsColor.color5.color};
    }

    .general-box-3 > .general-box-header {
        position: ${(props) => props.theme.settings.hr.position};
        padding: ${(props) => props.theme.settings.hr.padding};
        border-bottom: ${(props) => props.theme.settings.hr.borderBottom};
    }

    .gray {
        color: ${(props) => props.theme.settings.fontsColor.gray.color};
    }

    .news-article-body {
        position: ${(props) => props.theme.articles.body.position};
        color: ${(props) => props.theme.articles.body.color};
        padding: ${(props) => props.theme.articles.body.padding};
        font-size: ${(props) => props.theme.articles.body.fontSize};
        word-break: ${(props) => props.theme.articles.body.wordBreak};
    }

    .article-body-author {
        position: ${(props) => props.theme.articles.author.position};
        background: ${(props) => props.theme.articles.author.background};
        border-radius: ${(props) => props.theme.articles.author.borderRadius};
        height: ${(props) => props.theme.articles.author.height};
        margin: ${(props) => props.theme.articles.author.margin};
    }

    .news-article-footer {
        width: ${(props) => props.theme.articles.footer.width};
        height: ${(props) => props.theme.articles.footer.height};
        gap: ${(props) => props.theme.articles.footer.gap};
        border-top: ${(props) => props.theme.articles.footer.borderTop};
    }

    .another-header-menu > div.webcenter > div.flex > .another-header-menu-option.visited {
        background: ${(props) => props.theme.halloffame.anotherHeaderVisited.background};
    }

    .another-header-menu > div.webcenter > div.flex > .another-header-menu-option:hover {
        cursor: ${(props) => props.theme.halloffame.hover.cursor};
        background: ${(props) => props.theme.halloffame.hover.background};
        color: ${(props) => props.theme.halloffame.hover.color};
    }

    .general-box.hall-of-fame > .general-box-content > .hall-of-fame-box:first-child > .trophy,
    .general-box.hall-of-fame > .general-box-content > .hall-of-fame-box:nth-child(2) > .trophy,
    .general-box.hall-of-fame > .general-box-content > .hall-of-fame-box:nth-child(3) > .trophy {
        position: ${(props) => props.theme.halloffame.generalBoxContent.position};
        background: ${(props) => props.theme.halloffame.generalBoxContent.background};
        width: ${(props) => props.theme.halloffame.generalBoxContent.width};
        height: ${(props) => props.theme.halloffame.generalBoxContent.height};
        right: ${(props) => props.theme.halloffame.generalBoxContent.right};
        border-radius: ${(props) => props.theme.halloffame.generalBoxContent.borderRadius};
        margin: ${(props) => props.theme.halloffame.generalBoxContent.margin};
    }

    #general-warning-store {
        position: ${(props) => props.theme.shop.warningStore.position};
        background: ${(props) => props.theme.shop.warningStore.background};
        border: ${(props) => props.theme.shop.warningStore.border};
        border-radius: ${(props) => props.theme.shop.warningStore.borderRadius};
        padding: ${(props) => props.theme.shop.warningStore.padding};
    }

    #cash-amount {
        position: ${(props) => props.theme.shop.cashAmount.position};
        background: ${(props) => props.theme.shop.cashAmount.background};
        width: ${(props) => props.theme.shop.cashAmount.width};
        color: ${(props) => props.theme.shop.cashAmount.color};
        border-radius: ${(props) => props.theme.shop.cashAmount.borderRadius};
        padding: ${(props) => props.theme.shop.cashAmount.padding};
        font-size: ${(props) => props.theme.shop.cashAmount.fontSize};
        font-weight: ${(props) => props.theme.shop.cashAmount.fontWeight};
        text-align: ${(props) => props.theme.shop.cashAmount.textAlign};
    }
    
    
    #cash-package-div {
        position: ${(props) => props.theme.shop.cashPackageDiv.position};
        background: ${(props) => props.theme.shop.cashPackageDiv.background};
        width: ${(props) => props.theme.shop.cashPackageDiv.width};
        border: ${(props) => props.theme.shop.cashPackageDiv.border};
        border-radius: ${(props) => props.theme.shop.cashPackageDiv.borderRadius};
        padding: ${(props) => props.theme.shop.cashPackageDiv.padding};
        display: ${(props) => props.theme.shop.cashPackageDiv.display};
    }

    .duo-theme {
        background-color: ${(props) => props.theme.habboway.background.bgColor};
    }

    .social-media-facebook,
    .social-media-twitter,
    .social-media-discord,
    .social-media-instagram,
    .desktop-haibbo-application {
        position: ${(props) => props.theme.socialMedia.position};
        background: ${(props) => props.theme.socialMedia.background};
        height: ${(props) => props.theme.socialMedia.height};
        color: ${(props) => props.theme.socialMedia.color};
        border-radius: ${(props) => props.theme.socialMedia.borderRadius};
        padding: ${(props) => props.theme.socialMedia.padding};
        margin: ${(props) => props.theme.socialMedia.margin};
        font-weight: ${(props) => props.theme.socialMedia.fontWeight};
        font-size: ${(props) => props.theme.socialMedia.fontSize};
        overflow: ${(props) => props.theme.socialMedia.overflow};
    }

    .general-box-3 > .general-box-header > .general-box-header-icon {
        position: ${(props) => props.theme.staff.generalBoxIcon.position};
        min-width: ${(props) => props.theme.staff.generalBoxIcon.minWidth};
        height: ${(props) => props.theme.staff.generalBoxIcon.height};
        border: ${(props) => props.theme.staff.generalBoxIcon.border};
        border-radius: ${(props) => props.theme.staff.generalBoxIcon.borderRadius};
        margin: ${(props) => props.theme.staff.generalBoxIcon.margin};
        box-shadow: ${(props) => props.theme.staff.generalBoxIcon.boxShadow};
        display: ${(props) => props.theme.staff.generalBoxIcon.display};
    }

    .another-header-menu-icon {
        position: ${(props) => props.theme.staff.menuIcon.position};
        background: ${(props) => props.theme.staff.menuIcon.background};
        border-radius: ${(props) => props.theme.staff.menuIcon.borderRadius};
        width: ${(props) => props.theme.staff.menuIcon.width};
        height: ${(props) => props.theme.staff.menuIcon.height};
        top: ${(props) => props.theme.staff.menuIcon.top};
        margin: ${(props) => props.theme.staff.menuIcon.margin};
        display: ${(props) => props.theme.staff.menuIcon.display};
    }

    .gray-clear {
        color: ${(props) => props.theme.footer.color};
    }

    .display-staff-box:nth-child(2),
    .display-staff-box:nth-child(4),
    .display-staff-box:nth-child(6),
    .display-staff-box:nth-child(8),
    .display-staff-box:nth-child(10) {
    background: ${(props) => props.theme.staff.otherDiv.background};
    }
`