var IMAGE_PATH = 'images';

var React = window.React;

var formatNumber = function(number)  {
    number = parseFloat(number, 10);

    if (number >= 1000) {
        return (number / 1000).toFixed(2) + 'K';
    }
    else if (number >= 1000000) {
        return (number / 1000000).toFixed(2) + 'K';
    }

    return number.toFixed(2);
};

var ____Class1W=React.Component;for(var ____Class1W____Key in ____Class1W){if(____Class1W.hasOwnProperty(____Class1W____Key)){CombatantCompact[____Class1W____Key]=____Class1W[____Class1W____Key];}}var ____SuperProtoOf____Class1W=____Class1W===null?null:____Class1W.prototype;CombatantCompact.prototype=Object.create(____SuperProtoOf____Class1W);CombatantCompact.prototype.constructor=CombatantCompact;CombatantCompact.__superConstructor__=____Class1W;function CombatantCompact(){"use strict";if(____Class1W!==null){____Class1W.apply(this,arguments);}}
    Object.defineProperty(CombatantCompact.prototype,"jobImage",{writable:true,configurable:true,value:function(job) {"use strict";
        if (window.JSFIDDLE) {
            return window.GLOW_ICONS[job.toLowerCase()];
        }

        return IMAGE_PATH + '/glow/' + job.toLowerCase() + '.png';
    }});

    Object.defineProperty(CombatantCompact.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        //var width = parseInt(this.props.data.damage / this.props.encounterDamage * 100, 10) + '%';
        var width = parseInt(this.props.total / this.props.max * 100, 10) + '%';
        
        return (
            this.props.perSecond === '---' ? null :
            React.createElement("li", {
                className: 'row ' + this.props.job.toLowerCase() + (this.props.isSelf ? ' self' : ''), 
                onClick: this.props.onClick}, 
                React.createElement("div", {
                    className: "bar", 
                    style: {width: width}}), 
                    React.createElement("div", {className: "text-overlay"}, 
                        React.createElement("div", {className: "stats"}, 
                            React.createElement("span", {className: "total"}, 
                                this.props.totalFormatted
                            ), 

                            this.props.additional ?
                            React.createElement("span", {className: "additional"}, 
                                "[", this.props.additional, "]"
                        ) : null/*,
                            "(", 
                            React.createElement("span", {className: "ps"}, 
                                this.props.perSecond, ","
                            ), 

                            React.createElement("span", {className: "percent"}, 
                                this.props.percentage
                            ), 
                            ")"*/
                        ), 
                        React.createElement("div", {className: "info"}, 
                            React.createElement("span", {className: "job-icon"}, 
                                React.createElement("img", {src: this.jobImage(this.props.job)})
                            ), 
                            React.createElement("span", {className: "rank"}, 
                                this.props.rank, "."
                            ), 
                            React.createElement("span", {className: "character-name"}, 
                                this.props.characterName
                            ), 
                            React.createElement("span", {className: "character-job"}, 
                                this.props.job
                            )
                        )
                    )
            )
        );
    }});

CombatantCompact.defaultProps = {
    onClick:function() {}
};

var ____Class1X=React.Component;for(var ____Class1X____Key in ____Class1X){if(____Class1X.hasOwnProperty(____Class1X____Key)){ChartView[____Class1X____Key]=____Class1X[____Class1X____Key];}}var ____SuperProtoOf____Class1X=____Class1X===null?null:____Class1X.prototype;ChartView.prototype=Object.create(____SuperProtoOf____Class1X);ChartView.prototype.constructor=ChartView;ChartView.__superConstructor__=____Class1X;function ChartView(){"use strict";if(____Class1X!==null){____Class1X.apply(this,arguments);}}
    Object.defineProperty(ChartView.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        return (
            React.createElement("div", {className: "chart-view"}
            )
        );
    }});


var ____Class1Y=React.Component;for(var ____Class1Y____Key in ____Class1Y){if(____Class1Y.hasOwnProperty(____Class1Y____Key)){Header[____Class1Y____Key]=____Class1Y[____Class1Y____Key];}}var ____SuperProtoOf____Class1Y=____Class1Y===null?null:____Class1Y.prototype;Header.prototype=Object.create(____SuperProtoOf____Class1Y);Header.prototype.constructor=Header;Header.__superConstructor__=____Class1Y;
    function Header(props) {"use strict";
        ____Class1Y.call(this,props);
        this.state = {
            expanded: false
        };
    }

    Object.defineProperty(Header.prototype,"shouldComponentUpdate",{writable:true,configurable:true,value:function(nextProps) {"use strict";
        if (nextProps.encounter.encdps === '---') {
            return false;
        }

        return true;
    }});

    Object.defineProperty(Header.prototype,"handleExtraDetails",{writable:true,configurable:true,value:function(e) {"use strict";
        this.props.onExtraDetailsClick(e);

        this.setState({
            expanded: !this.state.expanded
        });
    }});

    Object.defineProperty(Header.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        var encounter = this.props.encounter;
        var rdps = parseFloat(encounter.encdps);
        var rdps_max = 0;

        if (!isNaN(rdps) && rdps !== Infinity) {
            rdps_max = Math.max(rdps_max, rdps);
        }

        return (
            React.createElement("div", {className: ("header " + (this.state.expanded ? '' : 'collapsed'))}, 
                React.createElement("div", {className: "encounter-header"}, 
                    React.createElement("div", {className: "encounter-data ff-header"}, 
                        React.createElement("span", {className: "target-name"}, 
                            encounter.title
                        ), 
                        React.createElement("span", {className: "duration"}, 
                            "(", encounter.duration, ")"
                        ), 
                        React.createElement("span", {className: ("arrow " + (this.state.expanded ? 'up' : 'down')), onClick: this.handleExtraDetails.bind(this)})
                    ), 

                    React.createElement("div", {
                        className: "chart-view-switcher", 
                        onClick: this.props.onViewChange}, 
                        this.props.currentView
                    )
                ), 
                React.createElement("div", {className: "extra-details"}, 
                    React.createElement("div", {className: "extra-row damage"}, 
                        React.createElement("div", {className: "cell"}, 
                            React.createElement("span", {className: "label ff-header"}, "Damage:"), 
                            React.createElement("span", {className: "value ff-text"}, 
                                formatNumber(encounter.damage)
                            )
                        ), 
                        React.createElement("div", {className: "cell"}, 
                            React.createElement("span", {className: "label ff-header"}, "DPS:"), 
                            React.createElement("span", {className: "value ff-text"}, 
                                formatNumber(encounter.encdps)
                            )
                        ), 
                        React.createElement("div", {className: "cell"}, 
                            React.createElement("span", {className: "label ff-header"}, "Crits:"), 
                            React.createElement("span", {className: "value ff-text"}, 
                                encounter['crithit%']
                            )
                        ), 
                        React.createElement("div", {className: "cell"}, 
                            React.createElement("span", {className: "label ff-header"}, "Miss:"), 
                            React.createElement("span", {className: "value ff-text"}, 
                                encounter['misses']
                            )
                        ), 
                        React.createElement("div", {className: "cell"}, 
                            React.createElement("span", {className: "label ff-header"}, "Max:"), 
                            React.createElement("span", {className: "value ff-text"}, 
                                encounter.maxhit
                            )
                        )
                    ), 
                    React.createElement("div", {className: "extra-row healing"}, 
                        React.createElement("div", {className: "cell"}, 
                            React.createElement("span", {className: "label ff-header"}, "Heals:"), 
                            React.createElement("span", {className: "value ff-text"}, 
                                formatNumber(encounter.healed)
                            )
                        ), 
                        React.createElement("div", {className: "cell"}, 
                            React.createElement("span", {className: "label ff-header"}, "HPS:"), 
                            React.createElement("span", {className: "value ff-text"}, 
                                formatNumber(encounter.enchps)
                            )
                        ), 
                        React.createElement("div", {className: "cell"}, 
                            React.createElement("span", {className: "label ff-header"}, "Crits:"), 
                            React.createElement("span", {className: "value ff-text"}, 
                                encounter['critheal%']
                            )
                        ), 
                        React.createElement("div", {className: "cell"}, 
                            React.createElement("span", {className: "label ff-header"}, "Max:"), 
                            React.createElement("span", {className: "value ff-text"}, 
                                encounter.maxheal
                            )
                        )
                    ),
                    React.createElement("div", {className: "extra-row death"}, 
                        React.createElement("div", {className: "cell"}, 
                            React.createElement("span", {className: "label ff-header"}, "Deaths:"), 
                            React.createElement("span", {className: "value ff-text"}, 
                                encounter['deaths']
                            )
                        )
                    )
                )
            )
        );
    }});


Header.defaultProps = {
    encounter: {},
    onViewChange:function() {},
    onExtraDetailsClick:function() {}
};


var ____Class1Z=React.Component;for(var ____Class1Z____Key in ____Class1Z){if(____Class1Z.hasOwnProperty(____Class1Z____Key)){Combatants[____Class1Z____Key]=____Class1Z[____Class1Z____Key];}}var ____SuperProtoOf____Class1Z=____Class1Z===null?null:____Class1Z.prototype;Combatants.prototype=Object.create(____SuperProtoOf____Class1Z);Combatants.prototype.constructor=Combatants;Combatants.__superConstructor__=____Class1Z;function Combatants(){"use strict";if(____Class1Z!==null){____Class1Z.apply(this,arguments);}}
    Object.defineProperty(Combatants.prototype,"shouldComponentUpdate",{writable:true,configurable:true,value:function(nextProps) {"use strict";
        // if data is empty then don't re-render
        if (Object.getOwnPropertyNames(nextProps.data).length === 0) {
            return false;
        }

        return true;
    }});

    Object.defineProperty(Combatants.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        var rows = [];
        var maxRows = 12;
        var isDataArray = _.isArray(this.props.data);
        var dataArray = isDataArray ? this.props.data : Object.keys(this.props.data);
        var limit = Math.max(dataArray.length, maxRows);
        var names = dataArray.slice(0, maxRows-1);
        var maxdps = false;
        var combatant;
        var row;
        var isSelf;
        var rank = 1;
        var stats;

        for (var i = 0; i < names.length; i++) {
            combatant = isDataArray ? this.props.data[i] : this.props.data[names[i]];
            stats = null;

            isSelf = combatant.name === 'YOU' || combatant.name === 'You';

            if (combatant.Job !== "") {
                // should probably fix this
                if (this.props.currentView === 'Healing') {
                    if (parseInt(combatant.healed, 10) > 0) {
                        if (!maxdps) {
                            maxdps = parseFloat(combatant.healed);
                        }
                        stats = {
                            job: combatant.Job || '',
                            characterName: combatant.name,
                            total: combatant.healed,
                            totalFormatted: formatNumber(combatant.healed),
                            perSecond: formatNumber(combatant.enchps) + ' (' + combatant['OverHealPct'] + ', ' + combatant['healed%'] + ')'
                            /*perSecond: combatant['OverHealPct'],
                            percentage: combatant['healed%']*/
                        }
                    }
                }
                else if (this.props.currentView === 'Tanking') {
                    if (parseInt(combatant.damagetaken, 10) > 0) {
                        if (!maxdps) {
                            maxdps = parseFloat(combatant.damagetaken);
                        }
                        stats = {
                            job: combatant.Job || '',
                            characterName: combatant.name,
                            total: combatant.damagetaken,
                            totalFormatted: formatNumber(combatant.damagetaken) + ' (' + combatant.ParryPct + ', ' + combatant.BlockPct + ')'
                            /*perSecond: combatant.ParryPct,
                            percentage: combatant.BlockPct*/
                        }
                    }
                }
                else if (this.props.currentView === 'Deaths') {
                    if (parseInt(combatant.deaths, 10) > 0) {
                        if (!maxdps) {
                            maxdps = parseFloat(combatant.deaths);
                        }
                        stats = {
                            job: combatant.Job || '',
                            characterName: combatant.name,
                            total: combatant.deaths,
                            totalFormatted: combatant.deaths
                        }
                    }
                }
                else if (this.props.currentView === 'Misses') {
                    if (parseInt(combatant.misses, 10) > 0) {
                        if (!maxdps) {
                            maxdps = parseFloat(combatant.misses);
                        }
                        stats = {
                            job: combatant.Job || '',
                            characterName: combatant.name,
                            total: combatant.misses,
                            totalFormatted: combatant.misses
                        }
                    }
                }
                else {
                    if (!maxdps) {
                        maxdps = parseFloat(combatant.damage);
                    }
                    stats = {
                        job: combatant.Job || '',
                        characterName: combatant.name,
                        total: combatant.damage,
                        totalFormatted: formatNumber(combatant.damage) + ' (' + formatNumber(combatant.dps) + ', ' + combatant['damage%'] + ')'
                       /* perSecond: formatNumber(combatant.dps),
                        percentage: combatant['damage%']*/
                    }
                }

                if (stats) {
                    rows.push(
                        React.createElement(CombatantCompact, React.__spread({
                            onClick: this.props.onClick, 
                            encounterDamage: this.props.encounterDamage, 
                            rank: rank, 
                            data: combatant, 
                            isSelf: isSelf, 
                            key: combatant.name, 
                            max: maxdps}, 
                            stats)
                        )
                    );
                    rank++;
                }
            }

        }

        return (
            React.createElement("ul", {className: "combatants"}, 
                rows
            )
        );
    }});


Combatants.defaultProps = {
    onClick:function() {}
};

var ____Class20=React.Component;for(var ____Class20____Key in ____Class20){if(____Class20.hasOwnProperty(____Class20____Key)){DamageMeter[____Class20____Key]=____Class20[____Class20____Key];}}var ____SuperProtoOf____Class20=____Class20===null?null:____Class20.prototype;DamageMeter.prototype=Object.create(____SuperProtoOf____Class20);DamageMeter.prototype.constructor=DamageMeter;DamageMeter.__superConstructor__=____Class20;
    function DamageMeter(props) {"use strict";
        ____Class20.call(this,props);
        this.state = {
            currentViewIndex: 0
        };
    }

    Object.defineProperty(DamageMeter.prototype,"shouldComponentUpdate",{writable:true,configurable:true,value:function(nextProps, nextState) {"use strict";
        return true;
    }});

    Object.defineProperty(DamageMeter.prototype,"handleCombatRowClick",{writable:true,configurable:true,value:function(e) {"use strict";
    }});

    Object.defineProperty(DamageMeter.prototype,"handleClick",{writable:true,configurable:true,value:function(e) {"use strict";
    }});

    Object.defineProperty(DamageMeter.prototype,"handleViewChange",{writable:true,configurable:true,value:function(e) {"use strict";
        var index = this.state.currentViewIndex;

        if (index > this.props.chartViews.length-2) {
            index = 0;
        }
        else {
            index++;
        }

        this.setState({
            currentViewIndex: index
        });

    }});

    Object.defineProperty(DamageMeter.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        var data = this.props.parseData.Combatant;

        // Healing
        // need to resort data if currentView is not damage
        if (this.state.currentViewIndex === 1) {
            data = _.sortBy(_.filter(data, function(d)  {
                return parseInt(d.healed, 10) > 0;
            }), function(d)  {
                if (this.state.currentViewIndex === 1) {
                    return -parseInt(d.healed, 10);
                }
            }.bind(this));
        }
        // Tanking
        else if (this.state.currentViewIndex === 2) {
            data = _.sortBy(_.filter(data, function(d)  {
                return parseInt(d.damagetaken, 10) > 0;
            }), function(d)  {
                if (this.state.currentViewIndex === 2) {
                    return -parseInt(d.damagetaken, 10);
                }
            }.bind(this));
        }

        return (
            this.props.parseData.Encounter.encdps === '---' ? React.createElement("h3", null, "Awaiting Data") :
            React.createElement("div", {
                onClick: this.handleClick, 
                className: 'damage-meter' + (!this.props.parseData.isActive ? ' inactive' : '') + (!this.props.noJobColors ? ' show-job-colors' : '')}, 
                React.createElement(Header, {
                    encounter: this.props.parseData.Encounter, 
                    onViewChange: this.handleViewChange.bind(this), 
                    currentView: this.props.chartViews[this.state.currentViewIndex]}
                    ), 
                React.createElement(Combatants, {
                    currentView: this.props.chartViews[this.state.currentViewIndex], 
                    onClick: this.handleCombatRowClick, 
                    data: data, 
                    encounterDamage: this.props.parseData.Encounter.damage})
            )
        );
    }});


DamageMeter.defaultProps = {
    chartViews: [
        'Damage',
        'Healing',
        'Tanking',
        'Deaths',
        'Misses'
    ],
    parseData: {},
    noJobColors: false
};