"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AgendaComponent = (function () {
    function AgendaComponent() {
    }
    AgendaComponent.prototype.ngOnInit = function () {
        $("#scheduler").kendoScheduler({
            date: new Date("2013/6/13"),
            startTime: new Date("2013/6/13 07:00 AM"),
            height: 600,
            views: [
                "day",
                { type: "workWeek", selected: true },
                "week",
                "month",
                "agenda",
                { type: "timeline", eventHeight: 50 }
            ],
            timezone: "Etc/UTC",
            dataSource: {
                batch: true,
                transport: {
                    read: {
                        url: "//demos.telerik.com/kendo-ui/service/tasks",
                        dataType: "jsonp"
                    },
                    update: {
                        url: "//demos.telerik.com/kendo-ui/service/tasks/update",
                        dataType: "jsonp"
                    },
                    create: {
                        url: "//demos.telerik.com/kendo-ui/service/tasks/create",
                        dataType: "jsonp"
                    },
                    destroy: {
                        url: "//demos.telerik.com/kendo-ui/service/tasks/destroy",
                        dataType: "jsonp"
                    },
                    parameterMap: function (options, operation) {
                        if (operation !== "read" && options.models) {
                            return { models: kendo.stringify(options.models) };
                        }
                    }
                },
                schema: {
                    model: {
                        id: "taskId",
                        fields: {
                            taskId: { from: "TaskID", type: "number" },
                            title: { from: "Title", defaultValue: "No title", validation: { required: true } },
                            start: { type: "date", from: "Start" },
                            end: { type: "date", from: "End" },
                            startTimezone: { from: "StartTimezone" },
                            endTimezone: { from: "EndTimezone" },
                            description: { from: "Description" },
                            recurrenceId: { from: "RecurrenceID" },
                            recurrenceRule: { from: "RecurrenceRule" },
                            recurrenceException: { from: "RecurrenceException" },
                            ownerId: { from: "OwnerID", defaultValue: 1 },
                            isAllDay: { type: "boolean", from: "IsAllDay" }
                        }
                    }
                },
                filter: {
                    logic: "or",
                    filters: [
                        { field: "ownerId", operator: "eq", value: 1 },
                        { field: "ownerId", operator: "eq", value: 2 }
                    ]
                }
            },
            resources: [
                {
                    field: "ownerId",
                    title: "Owner",
                    dataSource: [
                        { text: "Alex", value: 1, color: "#f8a398" },
                        { text: "Bob", value: 2, color: "#51a0ed" },
                        { text: "Charlie", value: 3, color: "#56ca85" }
                    ]
                }
            ]
        });
        $("#checkRessource :checkbox").change(function (e) {
            var checked = $.map($("#checkRessource :checked"), function (checkbox) {
                return parseInt($(checkbox).val());
            });
            var scheduler = $("#scheduler").data("kendoScheduler");
            scheduler.dataSource.filter({
                operator: function (task) {
                    return $.inArray(task.ownerId, checked) >= 0;
                }
            });
        });
    };
    AgendaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-agenda',
            templateUrl: 'agenda.component.html',
            styles: ["\n        .k-nav-current > .k-link span + span {\n            max-width: 200px;\n            display: inline-block;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            overflow: hidden;\n            vertical-align: top;\n        }\n\n        #listRessources{\n            width: 100%;\n            clear: both;\n        }\n    "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AgendaComponent);
    return AgendaComponent;
}());
exports.AgendaComponent = AgendaComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW5kYS9hZ2VuZGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUF3QmxEO0lBQ0k7SUFBZ0IsQ0FBQztJQUVqQixrQ0FBUSxHQUFSO1FBQ0EsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLGNBQWMsQ0FBQztZQUMzQixJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzNCLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUN6QyxNQUFNLEVBQUUsR0FBRztZQUNYLEtBQUssRUFBRTtnQkFDSCxLQUFLO2dCQUNMLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO2dCQUNwQyxNQUFNO2dCQUNOLE9BQU87Z0JBQ1AsUUFBUTtnQkFDUixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBQzthQUN2QztZQUNELFFBQVEsRUFBRSxTQUFTO1lBQ25CLFVBQVUsRUFBRTtnQkFDUixLQUFLLEVBQUUsSUFBSTtnQkFDWCxTQUFTLEVBQUU7b0JBQ1AsSUFBSSxFQUFFO3dCQUNGLEdBQUcsRUFBRSw0Q0FBNEM7d0JBQ2pELFFBQVEsRUFBRSxPQUFPO3FCQUNwQjtvQkFDRCxNQUFNLEVBQUU7d0JBQ0osR0FBRyxFQUFFLG1EQUFtRDt3QkFDeEQsUUFBUSxFQUFFLE9BQU87cUJBQ3BCO29CQUNELE1BQU0sRUFBRTt3QkFDSixHQUFHLEVBQUUsbURBQW1EO3dCQUN4RCxRQUFRLEVBQUUsT0FBTztxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLEdBQUcsRUFBRSxvREFBb0Q7d0JBQ3pELFFBQVEsRUFBRSxPQUFPO3FCQUNwQjtvQkFDRCxZQUFZLEVBQUUsVUFBUyxPQUFPLEVBQUUsU0FBUzt3QkFDckMsRUFBRSxDQUFDLENBQUMsU0FBUyxLQUFLLE1BQU0sSUFBSSxPQUFPLENBQUMs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Q0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqRCxDQUFDO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDSCxDQUFDO0lBcEhMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLE1BQU0sRUFBRSxDQUFFLDBXQWNUO2FBQ0E7U0FDSixDQUFDOzt1QkFBQTtJQWlHRixzQkFBQztBQUFELENBaEdBLEFBZ0dDLElBQUE7QUFoR1ksdUJBQWUsa0JBZ0czQixDQUFBIiwiZmlsZSI6ImFnZW5kYS9hZ2VuZGEuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuZGVjbGFyZSAgdmFyICQsIGtlbmRvIDphbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ215LWFnZW5kYScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FnZW5kYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZXM6IFsgYFxyXG4gICAgICAgIC5rLW5hdi1jdXJyZW50ID4gLmstbGluayBzcGFuICsgc3BhbiB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjbGlzdFJlc3NvdXJjZXN7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICB9XHJcbiAgICBgXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZ2VuZGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgXHJcbiAgICAkKFwiI3NjaGVkdWxlclwiKS5rZW5kb1NjaGVkdWxlcih7XHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoXCIyMDEzLzYvMTNcIiksXHJcbiAgICAgICAgc3RhcnRUaW1lOiBuZXcgRGF0ZShcIjIwMTMvNi8xMyAwNzowMCBBTVwiKSxcclxuICAgICAgICBoZWlnaHQ6IDYwMCxcclxuICAgICAgICB2aWV3czogW1xyXG4gICAgICAgICAgICBcImRheVwiLFxyXG4gICAgICAgICAgICB7IHR5cGU6IFwid29ya1dlZWtcIiwgc2VsZWN0ZWQ6IHRydWUgfSxcclxuICAgICAgICAgICAgXCJ3ZWVrXCIsXHJcbiAgICAgICAgICAgIFwibW9udGhcIixcclxuICAgICAgICAgICAgXCJhZ2VuZGFcIixcclxuICAgICAgICAgICAgeyB0eXBlOiBcInRpbWVsaW5lXCIsIGV2ZW50SGVpZ2h0OiA1MH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHRpbWV6b25lOiBcIkV0Yy9VVENcIixcclxuICAgICAgICBkYXRhU291cmNlOiB7XHJcbiAgICAgICAgICAgIGJhdGNoOiB0cnVlLFxyXG4gICAgICAgICAgICB0cmFuc3BvcnQ6IHtcclxuICAgICAgICAgICAgICAgIHJlYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiLy9kZW1vcy50ZWxlcmlrLmNvbS9rZW5kby11aS9zZXJ2aWNlL3Rhc2tzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvbnBcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCIvL2RlbW9zLnRlbGVyaWsuY29tL2tlbmRvLXVpL3NlcnZpY2UvdGFza3MvdXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvbnBcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCIvL2RlbW9zLnRlbGVyaWsuY29tL2tlbmRvLXVpL3NlcnZpY2UvdGFza3MvY3JlYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvbnBcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlc3Ryb3k6IHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiLy9kZW1vcy50ZWxlcmlrLmNvbS9rZW5kby11aS9zZXJ2aWNlL3Rhc2tzL2Rlc3Ryb3lcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29ucFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyTWFwOiBmdW5jdGlvbihvcHRpb25zLCBvcGVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BlcmF0aW9uICE9PSBcInJlYWRcIiAmJiBvcHRpb25zLm1vZGVscykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge21vZGVsczoga2VuZG8uc3RyaW5naWZ5KG9wdGlvbnMubW9kZWxzKX07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzY2hlbWE6IHtcclxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwidGFza0lkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tJZDogeyBmcm9tOiBcIlRhc2tJRFwiLCB0eXBlOiBcIm51bWJlclwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7IGZyb206IFwiVGl0bGVcIiwgZGVmYXVsdFZhbHVlOiBcIk5vIHRpdGxlXCIsIHZhbGlkYXRpb246IHsgcmVxdWlyZWQ6IHRydWUgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogeyB0eXBlOiBcImRhdGVcIiwgZnJvbTogXCJTdGFydFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogeyB0eXBlOiBcImRhdGVcIiwgZnJvbTogXCJFbmRcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFRpbWV6b25lOiB7IGZyb206IFwiU3RhcnRUaW1lem9uZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZFRpbWV6b25lOiB7IGZyb206IFwiRW5kVGltZXpvbmVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogeyBmcm9tOiBcIkRlc2NyaXB0aW9uXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjdXJyZW5jZUlkOiB7IGZyb206IFwiUmVjdXJyZW5jZUlEXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjdXJyZW5jZVJ1bGU6IHsgZnJvbTogXCJSZWN1cnJlbmNlUnVsZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3VycmVuY2VFeGNlcHRpb246IHsgZnJvbTogXCJSZWN1cnJlbmNlRXhjZXB0aW9uXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXJJZDogeyBmcm9tOiBcIk93bmVySURcIiwgZGVmYXVsdFZhbHVlOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWxsRGF5OiB7IHR5cGU6IFwiYm9vbGVhblwiLCBmcm9tOiBcIklzQWxsRGF5XCIgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICBsb2dpYzogXCJvclwiLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgZmllbGQ6IFwib3duZXJJZFwiLCBvcGVyYXRvcjogXCJlcVwiLCB2YWx1ZTogMSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgZmllbGQ6IFwib3duZXJJZFwiLCBvcGVyYXRvcjogXCJlcVwiLCB2YWx1ZTogMiB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc291cmNlczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogXCJvd25lcklkXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJPd25lclwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgdGV4dDogXCJBbGV4XCIsIHZhbHVlOiAxLCBjb2xvcjogXCIjZjhhMzk4XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6IFwiQm9iXCIsIHZhbHVlOiAyLCBjb2xvcjogXCIjNTFhMGVkXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRleHQ6IFwiQ2hhcmxpZVwiLCB2YWx1ZTogMywgY29sb3I6IFwiIzU2Y2E4NVwiIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjY2hlY2tSZXNzb3VyY2UgOmNoZWNrYm94XCIpLmNoYW5nZShmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgdmFyIGNoZWNrZWQgPSAkLm1hcCgkKFwiI2NoZWNrUmVzc291cmNlIDpjaGVja2VkXCIpLCBmdW5jdGlvbihjaGVja2JveCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoJChjaGVja2JveCkudmFsKCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgc2NoZWR1bGVyID0gJChcIiNzY2hlZHVsZXJcIikuZGF0YShcImtlbmRvU2NoZWR1bGVyXCIpO1xyXG5cclxuICAgICAgICBzY2hlZHVsZXIuZGF0YVNvdXJjZS5maWx0ZXIoe1xyXG4gICAgICAgICAgICBvcGVyYXRvcjogZnVuY3Rpb24odGFzaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICQuaW5BcnJheSh0YXNrLm93bmVySWQsIGNoZWNrZWQpID49IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgfVxyXG59Il19
